import type { IncomingMessage } from "http";
import type { Socket } from "net";
/**
 * WebSocket upgrade request parameters
 */
export interface WebSocketUpgradeParams {
    /** The incoming HTTP request */
    req: IncomingMessage;
    /** The socket connection */
    socket: Socket;
    /** The first packet of the upgraded stream */
    head: Buffer;
}
/**
 * Type guard to check if an object has WebSocket upgrade parameters
 */
export declare function isWebSocketUpgradeParams(obj: any): obj is WebSocketUpgradeParams;
