import type { DevToolsSys } from "../types";
interface DevToolsNodeSysOptions {
    cwd: string;
    skipValidate?: boolean;
    ignoreMissingConfig?: boolean;
}
export declare function createDevToolsNodeSys(opts: DevToolsNodeSysOptions): Promise<DevToolsSys>;
export declare function configHasProperty(contents: Record<string, any>, key: string): boolean;
export declare function readConfigFile(): Promise<any>;
export declare function writeConfigFile(contents: Record<string, any>): Promise<void>;
export declare function getGitRemoteURL(repoPath: string): string;
export declare function findPackageJsonDir(dir: string): string | null;
export declare function findAppRootDir(dir: string): string | null;
export {};
