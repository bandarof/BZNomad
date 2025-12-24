import { type InitConfig } from "./InitStateMachine";
import type { InitState } from "$/ai-utils";
export declare const attemptDryRunBackupGit: (initConfig: InitConfig, realInitState: InitState) => Promise<{
    success: boolean;
    error: string;
} | {
    success: boolean;
    error?: undefined;
} | null>;
