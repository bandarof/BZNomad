import type { DevToolsSys } from "../types";
import type { CLIArgs } from "./index";
import { type UserContext } from "$/ai-utils";
export declare const runCodeCommand: (sys: DevToolsSys, subCommand: string, args: CLIArgs) => Promise<void>;
export declare const runCodeGen: (sys: DevToolsSys, args: CLIArgs) => Promise<undefined>;
export declare function checkProjectRoot(sys: DevToolsSys, interactive: boolean): Promise<void>;
export declare function getUserContext(sys: DevToolsSys): Promise<UserContext>;
