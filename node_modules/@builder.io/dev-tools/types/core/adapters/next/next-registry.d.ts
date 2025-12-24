import { type ComponentRegistry, type SetComponentInfoOptions, type SetComponentInputOptions } from "../../../types";
import type { NextDevToolsSys } from "./index";
export declare function nextComponentRegistry(sys: NextDevToolsSys, cmpId: string | string[] | null, registerCmp: boolean, unregisterCmp: boolean, setCmpInfo: SetComponentInfoOptions | null, setCmpInput: SetComponentInputOptions | null, writeRegistry: boolean, readAllInputTypes: boolean): Promise<ComponentRegistry>;
