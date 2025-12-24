import type { DevToolsSys, EnvInfo } from "../types";
export declare function getDotEnvValue(sys: DevToolsSys, dotEnvFileNames: string[], envKey: string): Promise<EnvInfo>;
export declare function setDotEnvValue(sys: DevToolsSys, dotEnvFileNames: string[], envKey: string, envValue: string): Promise<EnvInfo>;
export declare function parseDotEnvFile(sys: DevToolsSys, envPath: string): Promise<Record<string, string> | null>;
export declare function parseDotEnvContent(envContent: string): Record<string, string>;
export declare function setDotEnvVar(sys: DevToolsSys, envPath: string, key: string, value: string): Promise<"create" | "update" | "permission-error" | null>;
