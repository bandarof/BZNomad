import type { SDK_VERSION_VALUES } from "../../../types";
export declare function createRemixTestFixturesSys(): Promise<import("./index").RemixDevToolsSys>;
export declare function createRemixTestMemSys(rootDir?: string): Promise<import("./index").RemixDevToolsSys>;
export declare function createRemixTestFixturesDevTools(sdkVersion?: SDK_VERSION_VALUES): Promise<{
    sys: import("./index").RemixDevToolsSys;
    devTools: import("../../../types").DevToolsAdapter;
}>;
