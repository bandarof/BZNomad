import type { CreateDevToolsOptions, DevToolsAdapter, DevToolsSys } from "../../../types";
export declare function createRemixDevTools(sys: CreateDevToolsOptions): Promise<DevToolsAdapter>;
export declare function createRemixDevToolsSys(sys: DevToolsSys): Promise<RemixDevToolsSys>;
export interface RemixDevToolsSys extends DevToolsSys {
    appDir: string;
    componentsDir: string;
    registryPath: string;
    remixConfigPath: string;
    typescriptEnabled: boolean;
    routesDir: string;
    hasLocaleParam: boolean;
    addExternalPackage: (pkgName: string) => void;
}
