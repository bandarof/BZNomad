import type { SDK_VERSION_VALUES } from "../../../types";
export declare function createNextTestMemSys(rootDir?: string): Promise<import("./index").NextDevToolsSys>;
export declare function createNextAppTestFixturesSys(): Promise<import("./index").NextDevToolsSys>;
export declare function createNextAppTestFixturesDevTools(sdkVersion?: SDK_VERSION_VALUES): Promise<{
    sys: import("./index").NextDevToolsSys;
    devTools: import("../../../types").DevToolsAdapter;
}>;
export declare function createNextPagesTestFixturesSys(): Promise<import("./index").NextDevToolsSys>;
export declare function createNextPagesTestFixturesDevTools(sdkVersion?: SDK_VERSION_VALUES): Promise<{
    sys: import("./index").NextDevToolsSys;
    devTools: import("../../../types").DevToolsAdapter;
}>;
export declare function createNextAppTestDevTools(): Promise<{
    sys: import("../..").DevToolsSys;
    devTools: import("../../../types").DevToolsAdapter;
}>;
