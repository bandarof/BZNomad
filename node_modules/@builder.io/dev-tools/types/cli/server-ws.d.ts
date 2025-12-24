import type { Duplex } from "node:stream";
import type { IncomingMessage } from "node:http";
import type { ServerOptions } from "ws";
import type { WebSocket } from "ws";
export type SocketRequest = {
    id: number;
    jsonrpc: string;
    method: string;
    params: any;
};
export type SocketResponse<T = any> = {
    id?: number | null;
    jsonrpc: string;
    result?: T;
    notification?: string;
    params?: any;
    error?: {
        code: number;
        message: string;
        data?: any;
    };
};
export type SocketSendOptions = {
    timeout?: number;
};
export type SocketQueue = {
    type: "request" | "notification";
    result?: SocketResponse["result"];
    error?: SocketResponse["error"];
};
type RegisterFn<T = any> = (params: T, socketId: string) => Promise<any> | any;
type SocketEvents = {
    listening: () => Promise<void> | void;
    connection: (socket: WebSocket, socketId: string) => Promise<void> | void;
    disconnection: (socketId: string) => Promise<void> | void;
    error: (error: Error) => Promise<void> | void;
    "socket-error": (socketId: string, error: Error) => Promise<void> | void;
    close: () => Promise<void> | void;
};
export declare function RPCWebSocketServer(opts: ServerOptions): {
    on: <EventKey extends keyof SocketEvents>(event: EventKey, cb: SocketEvents[EventKey]) => void;
    event: (e: string) => void;
    handleUpgrade: (req: IncomingMessage, socket: Duplex, upgradeHead: Buffer, callback?: (client: WebSocket, request: IncomingMessage) => void) => Promise<void>;
    clients: () => Map<string, WebSocket>;
    register: <T = any>(method: string, fn: RegisterFn<T>) => void;
    emit: (name: string, ...params: any[]) => void;
    notify: (name: string, socketId: string, ...params: any[]) => void;
    close: () => Promise<unknown>;
};
export {};
