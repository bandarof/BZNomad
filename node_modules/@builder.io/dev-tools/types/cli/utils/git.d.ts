import type { DevToolsSys } from "../../types";
import type { Credentials } from "../credentials";
import type { GitConfigs } from "$/ai-utils";
export interface RunCommandOptions {
    cwd?: string;
    debug?: boolean;
    sys: DevToolsSys;
    timeout?: number;
    stdin?: string;
    retry?: number;
}
type FetchGitConfigsResult = {
    success: true;
    gitConfigs: GitConfigs;
} | {
    success: false;
    error: Error;
};
export declare function runCommand(cmd: string, args: string[], opts: RunCommandOptions): Promise<string>;
export declare const isGitRepoCorrupted: (stdout: string, stderr: string) => boolean;
export declare function fetchGitConfigs(credentials: Credentials, projectId: string): Promise<FetchGitConfigsResult>;
export {};
