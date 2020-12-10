import { mocked } from 'ts-jest/utils';
import createMockInstance from 'jest-create-mock-instance';
import * as Services from '../grpc/window_grpc_pb';
import * as Messages from '../grpc/window_pb';
import { ConnInfo } from '../grpc/broker_pb';
import { WindowClient } from './windowClient';
import { Session } from '../grpc/session_pb';
import { Logger } from '../logging';
import {
  captureMockArgument,
  createCallbackHandler,
  createStreamingHandler,
  createWaitHandler,
  defaultConnInfo,
  defaultSession,
  identityCallback,
} from '../jest.helpers';
import { WindowInfoResponse } from './windowService';

jest.mock('../grpc/window_grpc_pb');

const MockClientClass = mocked(Services.WindowClient);
const logger = new Logger('test-logger');

describe('WindowClient', () => {
  let subject: WindowClient;
  let mockGRPCClient: jest.Mocked<Services.WindowClient>;
  let connInfo: ConnInfo.AsObject;
  let session: Session.AsObject;

  beforeEach(async () => {
    jest.resetAllMocks();
    subject = new WindowClient();
    connInfo = defaultConnInfo;
    session = defaultSession;

    mockGRPCClient = createMockInstance(Services.WindowClient);
    mockGRPCClient.waitForReady.mockImplementation(createWaitHandler());
    MockClientClass.mockImplementation(() => mockGRPCClient as any);

    await expect(
      subject.connect(connInfo, session, logger),
    ).resolves.toBeUndefined();
  });

  describe('#queryActiveWindow', () => {
    let sentRequest: Messages.WindowActiveWindowRequest;
    let sentResponse: Messages.WindowActiveWindowResponse;
    let queryResult: Promise<WindowInfoResponse>;

    beforeEach(async () => {
      sentResponse = new Messages.WindowActiveWindowResponse().setWindow(
        new Messages.WindowInfo(),
      );

      mockGRPCClient.windowActiveWindow.mockImplementation(
        createCallbackHandler(sentResponse),
      );

      queryResult = subject.queryActiveWindow();

      sentRequest = captureMockArgument(mockGRPCClient.windowActiveWindow);
    });

    it('should return a transformed response', async () => {
      await expect(queryResult).resolves.toMatchObject({
        title: expect.anything(),
        path: expect.anything(),
        pid: expect.anything(),
        x: expect.anything(),
        y: expect.anything(),
        width: expect.anything(),
        height: expect.anything(),
      });
    });

    it('should call grpc client function', async () => {
      expect(mockGRPCClient.windowActiveWindow).toHaveBeenCalledWith(
        expect.any(Messages.WindowActiveWindowRequest),
        expect.any(Function),
      );
    });

    it('should have attached the initial connection session to the request', () => {
      expect(sentRequest.getSession()?.toObject()).toStrictEqual(session);
    });
  });

  describe('#queryWindows', () => {
    let sentRequest: Messages.WindowStateRequest;
    let sentResponse: Messages.WindowStateResponse;
    let queryResult: Promise<WindowInfoResponse[]>;

    beforeEach(async () => {
      sentResponse = new Messages.WindowStateResponse().setWindowList([
        new Messages.WindowInfo(),
      ]);

      mockGRPCClient.windowState.mockImplementation(
        createCallbackHandler(sentResponse),
      );

      queryResult = subject.queryWindows();

      sentRequest = captureMockArgument(mockGRPCClient.windowState);
    });

    it('should return a transformed response', async () => {
      await expect(queryResult).resolves.toContainEqual(
        expect.objectContaining({
          title: expect.anything(),
          path: expect.anything(),
          pid: expect.anything(),
          x: expect.anything(),
          y: expect.anything(),
          width: expect.anything(),
          height: expect.anything(),
        }),
      );
    });

    it('should call grpc client function', async () => {
      expect(mockGRPCClient.windowState).toHaveBeenCalledWith(
        expect.any(Messages.WindowStateRequest),
        expect.any(Function),
      );
    });

    it('should have attached the initial connection session to the request', () => {
      expect(sentRequest.getSession()?.toObject()).toStrictEqual(session);
    });
  });

  describe('#streamActiveWindow', () => {
    let sentRequest: Messages.WindowActiveWindowStreamRequest;

    beforeEach(async () => {
      mockGRPCClient.windowActiveWindowStream.mockImplementation(
        createStreamingHandler(),
      );

      subject.streamActiveWindow(identityCallback);

      sentRequest = captureMockArgument(
        mockGRPCClient.windowActiveWindowStream,
      );
    });

    it('should have attached the initial connection session to the request', () => {
      expect(sentRequest.getSession()?.toObject()).toStrictEqual(session);
    });
  });

  describe('#streamWindows', () => {
    let sentRequest: Messages.WindowActiveWindowStreamRequest;

    beforeEach(async () => {
      mockGRPCClient.windowStateStream.mockImplementation(
        createStreamingHandler(),
      );

      subject.streamWindows(identityCallback);

      sentRequest = captureMockArgument(mockGRPCClient.windowStateStream);
    });

    it('should have attached the initial connection session to the request', () => {
      expect(sentRequest.getSession()?.toObject()).toStrictEqual(session);
    });
  });
});
