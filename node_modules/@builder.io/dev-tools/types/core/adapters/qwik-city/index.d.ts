import type { CreateDevToolsOptions, DevToolsAdapter, DevToolsSys } from "../../../types";
export declare function createQwikCityDevTools(sys: CreateDevToolsOptions): Promise<DevToolsAdapter>;
export declare function createQwikDevToolsSys(sys: DevToolsSys): Promise<QwikDevToolsSys>;
export interface QwikDevToolsSys extends DevToolsSys {
    componentsDir: string;
    registryPath: string;
    envPath: string;
}
