import type { AngularDevToolsSys } from ".";
export declare function angularUpdateAppModule(sys: AngularDevToolsSys, cmpName: string, cmpPath: string): Promise<string | undefined>;
export declare function angularEnsureAppModuleImports(sys: AngularDevToolsSys, appModulePath: string, cmpName: string, cmpPath: string, code: string): Promise<string>;
