import { OpaqueHandle } from 'react-reconciler';
import { Markdown, NewWhisper, WhisperComponent, WhisperComponentType } from "./types";

export type Type = string;
export type Props = Record<string, any>;
export type Container = any;
export type Instance = WhisperComponent<WhisperComponentType>;
export type TextInstance = Markdown;
export type HostConfigPublicInstance = string;
export type HostContext = null;
export type Update = Record<string, any>;
export type ChildSet = NewWhisper;
export type HostConfigTimeoutHandle = NodeJS.Timeout;
export type HostConfigNoTimeout = string;

export interface CoreConfig {
  getPublicInstance(instance: Instance | TextInstance): Instance;

  getRootHostContext(rootContainer: Container): HostContext | null;

  getChildHostContext(
    parentHostContext: HostContext,
    type: Type,
    rootContainer: Container,
  ): HostContext;

  prepareForCommit(containerInfo: Container): Record<string, any> | null;

  resetAfterCommit(containerInfo: Container): void;

  createInstance(
    type: Type,
    props: Props,
    rootContainer: Container,
    hostContext: HostContext,
    internalHandle: OpaqueHandle,
  ): Instance;

  appendInitialChild(parentInstance: Instance, child: Instance | TextInstance): void;

  finalizeInitialChildren(
    instance: Instance,
    type: Type,
    props: Props,
    rootContainer: Container,
    hostContext: HostContext,
  ): boolean;

  prepareUpdate(
    instance: Instance,
    type: Type,
    oldProps: Props,
    newProps: Props,
    rootContainer: Container,
    hostContext: HostContext,
  ): Update | null;

  shouldSetTextContent(type: Type, props: Props): boolean;

  createTextInstance(
    text: string,
    rootContainer: Container,
    hostContext: HostContext,
    internalHandle: OpaqueHandle,
  ): TextInstance;

  scheduleTimeout(fn: (...args: unknown[]) => unknown, delay?: number): HostConfigTimeoutHandle;

  cancelTimeout(id: HostConfigTimeoutHandle): void;

  noTimeout: any;

  now(): number;

  isPrimaryRenderer: boolean;
  warnsIfNotActing: any;
  supportsMutation: boolean;
  supportsPersistence: boolean;
  supportsHydration: boolean;

  getInstanceFromNode(node: any): any;

  isOpaqueHydratingObject(value: any): boolean;

  makeOpaqueHydratingObject: any;
  akeOpaqueHydratingObject: any;
  makeClientId: any;
  makeClientIdInDEV: any;
  beforeActiveInstanceBlur: any;
  afterActiveInstanceBlur: any;
  preparePortalMount: any;
  prepareScopeUpdate: any;
  getInstanceFromScope: any;
  getCurrentEventPriority: any;
  detachDeletedInstance: any;
}

export interface PersistenceConfig {
  cloneInstance(
    instance: Instance,
    updatePayload: Update | null,
    type: Type,
    oldProps: Props,
    newProps: Props,
    internalInstanceHandle: any,
    keepChildren: boolean,
    recyclableInstance: null | Instance,
  ): Instance;

  createContainerChildSet(container: Container): ChildSet;

  appendChildToContainerChildSet(childSet: ChildSet, child: Instance | TextInstance): ChildSet;

  finalizeContainerChildren(container: Container, newChildren: ChildSet): void;

  replaceContainerChildren(container: Container, newChildren: ChildSet): void;

  getOffscreenContainerType(): string;

  getOffscreenContainerProps(mode: any, children: any): Props;

  cloneHiddenInstance(
    instance: Instance,
    type: Type,
    props: Props,
    internalInstanceHandle: any,
  ): Instance;

  cloneHiddenTextInstance(
    instance: Instance,
    text: string,
    internalInstanceHandle: any,
  ): TextInstance;
}