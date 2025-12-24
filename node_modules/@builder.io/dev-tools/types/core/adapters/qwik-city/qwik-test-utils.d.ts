export declare function createQwikTestFixturesSys(): Promise<import("./index").QwikDevToolsSys>;
export declare function createQwikTestMemSys(rootDir?: string): Promise<import("./index").QwikDevToolsSys>;
export declare function createQwikTestFixturesDevTools(): Promise<{
    sys: import("./index").QwikDevToolsSys;
    devTools: import("../../../types").DevToolsAdapter;
}>;
