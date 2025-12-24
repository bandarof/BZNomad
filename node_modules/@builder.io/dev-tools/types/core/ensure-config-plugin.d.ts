import type { BuildToolConfig, DevToolsSys } from "../types";
export declare function findBuildToolConfig(sys: DevToolsSys): Promise<BuildToolConfig | null>;
export declare function ensureConfigPlugin(sys: DevToolsSys): Promise<import("../types").EnsureConfigResult>;
