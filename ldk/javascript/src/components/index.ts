// eslint-disable-next-line import/no-extraneous-dependencies
import { ReactNode } from "react";
import { create, MarkdownProps, WhisperComponentType } from "../whisper";

export interface Components {
  Whisper(props: any): void // eslint-disable-line
  Markdown(props: any): any // eslint-disable-line
  Box(props: any): any // eslint-disable-line
}

// TODO: Update component functions so they include props and return a React component (is React component the right type?)
// TODO: Test that JSX components are correctly transformed into the right component hierarchy, including function calls.
// TODO: Think about how we could support component hooks.

const processChildren = (children: any) => children ? {components: Array.isArray(children) ? children : [children]} : {}; // eslint-disable-line

export function Whisper(props: any): void { // eslint-disable-line
  const result = {
    ...props,
    ...(processChildren(props.children)),
  }

  delete result.children;
  
  create(result);
}

export function Box(props: any): any { // eslint-disable-line
  return {
    ...props,
    type: WhisperComponentType.Box,
  };
}

export function Button(props: any): any { // eslint-disable-line
  return {
    ...props,
    type: WhisperComponentType.Button,
  };
}

export function Checkbox(props: any): any { // eslint-disable-line
  return {
    ...props,
    type: WhisperComponentType.Checkbox,
  };
}

export function CollapseBox(props: any): any { // eslint-disable-line
  return {
    ...props,
    type: WhisperComponentType.CollapseBox,
  };
}

export function Divider(props: any): any { // eslint-disable-line
  return {
    ...props,
    type: WhisperComponentType.Divider,
  };
}

export function Email(props: any): any { // eslint-disable-line
  return {
    ...props,
    type: WhisperComponentType.Email,
  };
}

export function Link(props: any): any { // eslint-disable-line
  return {
    ...props,
    type: WhisperComponentType.Link,
  };
}

export function ListPair(props: any): any { // eslint-disable-line
  return {
    ...props,
    type: WhisperComponentType.ListPair,
  };
}

export function Markdown(props: MarkdownProps & { children: ReactNode }): any { // eslint-disable-line
  return {
    body: props.children,
    type: WhisperComponentType.Markdown,
  };
}

export function Message(props: any): any { // eslint-disable-line
  return {
    body: props.children,
    type: WhisperComponentType.Message,
  };
}

export function Number(props: any): any { // eslint-disable-line
  return {
    body: props.children,
    type: WhisperComponentType.Number,
  };
}

export function Password(props: any): any { // eslint-disable-line
  return {
    body: props.children,
    type: WhisperComponentType.Password,
  };
}

export function RadioGroup(props: any): any { // eslint-disable-line
  return {
    body: props.children,
    type: WhisperComponentType.RadioGroup,
  };
}

export function Select(props: any): any { // eslint-disable-line
  return {
    body: props.children,
    type: WhisperComponentType.Select,
  };
}

export function Telephone(props: any): any { // eslint-disable-line
  return {
    body: props.children,
    type: WhisperComponentType.Telephone,
  };
}

export function TextInput(props: any): any { // eslint-disable-line
  return {
    body: props.children,
    type: WhisperComponentType.TextInput,
  };
}

export function DateTimeInput(props: any): any { // eslint-disable-line
  return {
    body: props.children,
    type: WhisperComponentType.DateTimeInput,
  };
}
