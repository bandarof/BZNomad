import { type FusionConfig } from "$/ai-utils";
import type { LaunchArgs } from "../launch";
import type { DevToolsSys } from "../../types";
export declare function getFusionConfig(sys: DevToolsSys, args: LaunchArgs): Promise<FusionConfig>;
export declare function saveFusionConfig(sys: DevToolsSys, fusionConfig: FusionConfig, args: LaunchArgs): Promise<void>;
export declare function trackConfigData(sys: DevToolsSys, fusionConfig: FusionConfig): void;
