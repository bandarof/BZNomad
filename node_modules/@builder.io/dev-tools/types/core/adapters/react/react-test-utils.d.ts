import type { SDK_VERSION_VALUES } from "../../../types";
export declare function createReactTestMemSys(rootDir?: string): Promise<import("./index").ReactDevToolsSys>;
export declare function createReactAppTestFixturesSys(): Promise<import("./index").ReactDevToolsSys>;
export declare function createReactAppTestFixturesDevTools(sdkVersion?: SDK_VERSION_VALUES): Promise<{
    sys: import("./index").ReactDevToolsSys;
    devTools: import("../../../types").DevToolsAdapter;
}>;
