import type { FusionMetrics } from "$/ai-utils";
import type { Credentials } from "../credentials";
import type { DevToolsSys } from "../../types";
export declare function pushMetrics(sys: DevToolsSys, credentials: Credentials, body: FusionMetrics): Promise<void>;
