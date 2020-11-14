using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Grpc.Core;
using Proto;

namespace OliveHelpsLDK.Filesystem
{
    internal class FilesystemClient : BaseClient<Proto.Filesystem.FilesystemClient>, IFilesystemService
    {
        internal FilesystemClient(ChannelBase channel, Session session)
        {
            _client = new Proto.Filesystem.FilesystemClient(channel);
            _session = session;
        }

        public Task<IList<FileInfo>> QueryDirectory(string directoryPath,
            CancellationToken cancellationToken = default)
        {
            var request = new FilesystemDirRequest()
            {
                Session = CreateSession(),
                Directory = directoryPath,
            };
            return _client.FilesystemDirAsync(request, CreateOptions(cancellationToken))
                .ResponseAsync
                .ContinueWith(task => ConvertFileList(task.Result.Files), cancellationToken);
        }

        public Task<FileInfo> QueryFile(string filePath, CancellationToken cancellationToken = default)
        {
            var request = new FilesystemFileRequest()
            {
                Session = CreateSession(),
                Path = filePath,
            };
            return _client.FilesystemFileAsync(request, CreateOptions(cancellationToken))
                .ResponseAsync
                .ContinueWith(task => ConvertProtoFileInfo(task.Result.File), cancellationToken);
        }

        public IStreamingCall<FileEvent> StreamDirectory(string directoryPath,
            CancellationToken cancellationToken = default)
        {
            var request = new FilesystemDirStreamRequest
            {
                Session = CreateSession(),
                Directory = directoryPath
            };
            var call = _client.FilesystemDirStream(request, CreateOptions(cancellationToken));
            return new StreamingCall<Proto.FilesystemDirStreamResponse, FileEvent>(call, ConvertFileEvent);
        }

        public IStreamingCall<FileEvent> StreamFile(string filePath, CancellationToken cancellationToken = default)
        {
            var request = new FilesystemFileStreamRequest()
            {
                Session = CreateSession(),
                Path = filePath
            };
            var call = _client.FilesystemFileStream(request, CreateOptions(cancellationToken));
            return new StreamingCall<Proto.FilesystemFileStreamResponse, FileEvent>(call, ConvertFileEvent);
        }

        private static IList<FileInfo> ConvertFileList(IEnumerable<Proto.FileInfo> files)
        {
            return files.Select(ConvertProtoFileInfo).ToList();
        }

        private static FileInfo ConvertProtoFileInfo(Proto.FileInfo info)
        {
            return new FileInfo
            {
                IsDirectory = info.IsDir,
                Name = info.Name,
                Mode = info.Mode,
                Size = info.Size,
                Updated = info.Updated.ToDateTime(),
            };
        }

        private static FileEvent ConvertFileEvent(Proto.FilesystemDirStreamResponse dirStreamResponse)
        {
            return new FileEvent
            {
                FileInfo = ConvertProtoFileInfo(dirStreamResponse.File),
                FileAction = ConvertFileAction(dirStreamResponse.Action),
            };
        }

        private static FileEvent ConvertFileEvent(Proto.FilesystemFileStreamResponse fileStreamResponse)
        {
            return new FileEvent
            {
                FileInfo = ConvertProtoFileInfo(fileStreamResponse.File),
                FileAction = ConvertFileAction(fileStreamResponse.Action),
            };
        }

        private static FileAction ConvertFileAction(Proto.FileAction action)
        {
            return action switch
            {
                Proto.FileAction.Unknown => FileAction.Unknown,
                Proto.FileAction.Create => FileAction.Create,
                Proto.FileAction.Write => FileAction.Write,
                Proto.FileAction.Remove => FileAction.Remove,
                Proto.FileAction.Rename => FileAction.Rename,
                Proto.FileAction.Chmod => FileAction.Chmod,
                _ => throw new ArgumentOutOfRangeException(nameof(action), action, null)
            };
        }
    }
}