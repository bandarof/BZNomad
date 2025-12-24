export declare function createAngularTestFixturesSys(): Promise<import("./index").AngularDevToolsSys>;
export declare function createAngularTestMemSys(rootDir?: string): Promise<import("./index").AngularDevToolsSys>;
export declare function createAngularTestFixturesDevTools(): Promise<{
    sys: import("./index").AngularDevToolsSys;
    devTools: import("../../../types").DevToolsAdapter;
}>;
