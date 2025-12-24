import type { ComponentRegistry, SetComponentInfoOptions, SetComponentInputOptions } from "../../../types";
import type { AngularDevToolsSys } from "./index";
export declare function angularComponentRegistry(sys: AngularDevToolsSys, cmpId: string | string[] | null, registerCmp: boolean, unregisterCmp: boolean, setCmpInfo: SetComponentInfoOptions | null, setCmpInput: SetComponentInputOptions | null, writeRegistry: boolean, readAllInputTypes: boolean): Promise<ComponentRegistry>;
