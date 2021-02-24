import access from './access';
import categories from './categories';
import operatingSystem from './operatingSystem';
import Plugin from './plugin';
import { Loop } from './loop';
import { Logger } from './logging';
import { serveLoop } from './serve';
import { Aptitudes } from './aptitudes';
import * as Browser from './aptitudes/browserService';
import * as Clipboard from './aptitudes/clipboardService';
import * as Cursor from './aptitudes/cursorService';
import * as FileSystem from './aptitudes/fileSystemService';
import * as Hover from './aptitudes/hoverService';
import * as Keyboard from './aptitudes/keyboardService';
import * as Process from './aptitudes/processService';
import * as Vault from './aptitudes/vaultClient';
import * as Whisper from './aptitudes/whisperService';
import * as Window from './aptitudes/windowService';
import * as Network from './aptitudes/networkService';

export {
  access,
  categories,
  operatingSystem,
  Loop,
  Plugin,
  Logger,
  serveLoop,
  Aptitudes,
  Browser,
  Clipboard,
  Cursor,
  FileSystem,
  Hover,
  Keyboard,
  Process,
  Vault,
  Whisper,
  Window,
  Network,
};
