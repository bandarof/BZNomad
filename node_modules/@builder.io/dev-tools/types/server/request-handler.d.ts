import type { DevToolsServerContext } from "../types";
import type { IncomingMessage, Server, ServerResponse } from "http";
export declare function handleDevRequest(ctx: DevToolsServerContext | null, server: Server, req: IncomingMessage, res: ServerResponse): Promise<void>;
