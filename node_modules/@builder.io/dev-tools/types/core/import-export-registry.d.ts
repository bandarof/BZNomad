import type { DevToolsAdapter, DevToolsSys } from "../types";
export declare function exportRegistry(sys: DevToolsSys, devTools: DevToolsAdapter): Promise<string>;
export declare function importRegistry(sys: DevToolsSys, devTools: DevToolsAdapter, registryToImport: string): Promise<import(".").ComponentRegistry>;
