import BaseClient, { GRPCClientConstructor } from './baseClient';
import { HoverClient as HoverGRPCClient } from '../grpc/hover_grpc_pb';
import messages from '../grpc/hover_pb';
import { Hover, HoverReadRequest, HoverResponse } from './hover';
import { StoppableStream, StreamListener } from './stoppables';
import { TransformingStream } from './transformingStream';

/**
 * @param request - The request with x & y coordinates to update from.
 * @param message - The message.
 * @internal
 */
function updateRequest<
  T extends messages.HoverReadRequest | messages.HoverReadStreamRequest
>(request: HoverReadRequest, message: T): T {
  return message
    .setXfromcenter(request.xFromCenter)
    .setYfromcenter(request.yFromCenter) as T;
}

/**
 * @internal
 */
export class HoverClient extends BaseClient<HoverGRPCClient> implements Hover {
  protected generateClient(): GRPCClientConstructor<HoverGRPCClient> {
    return HoverGRPCClient;
  }

  text(params: HoverReadRequest): Promise<HoverResponse> {
    return this.buildQuery<
      messages.HoverReadRequest,
      messages.HoverReadResponse,
      HoverResponse
    >(
      (message, callback) => {
        this.client.hoverRead(message, callback);
      },
      () => updateRequest(params, new messages.HoverReadRequest()),
      (response) => ({ text: response.getText() }),
    );
  }

  listenText(
    params: HoverReadRequest,
    listener: StreamListener<HoverResponse>,
  ): StoppableStream<HoverResponse> {
    const message = updateRequest(
      params,
      new messages.HoverReadStreamRequest().setSession(
        this.createSessionMessage(),
      ),
    );
    return new TransformingStream(
      this.client.hoverReadStream(message),
      (response) => ({ text: response.getText() }),
      listener,
    );
  }

  protected serviceName(): string {
    return 'hover';
  }
}
