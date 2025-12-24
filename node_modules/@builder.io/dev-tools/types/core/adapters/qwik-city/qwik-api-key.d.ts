import type { EnvInfo } from "../../../types";
import type { QwikDevToolsSys } from ".";
export declare function getQwikApiKey(sys: QwikDevToolsSys): Promise<EnvInfo>;
export declare function setQwikApiKey(sys: QwikDevToolsSys, publicApiKey: string): Promise<EnvInfo>;
