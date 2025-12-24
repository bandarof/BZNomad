import type { DevToolsSys } from "../..";
import type { EnsureConfigResult } from "../../../types";
export declare function nextEnsureConfigPlugin(sys: DevToolsSys, configFilePath: string, configContent: string): Promise<EnsureConfigResult>;
