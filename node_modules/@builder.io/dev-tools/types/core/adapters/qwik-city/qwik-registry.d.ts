import type { ComponentRegistry, SetComponentInfoOptions, SetComponentInputOptions } from "../../../types";
import type { QwikDevToolsSys } from ".";
export declare function qwikComponentRegistry(sys: QwikDevToolsSys, cmpId: string | string[] | null, registerCmp: boolean, unregisterCmp: boolean, setCmpInfo: SetComponentInfoOptions | null, setCmpInput: SetComponentInputOptions | null, writeRegistry: boolean, readAllInputTypes: boolean): Promise<ComponentRegistry>;
