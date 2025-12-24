import { type ComponentRegistry, type SetComponentInfoOptions, type SetComponentInputOptions } from "../../../types";
import type { ReactDevToolsSys } from "./index";
export declare function reactComponentRegistry(sys: ReactDevToolsSys, cmpId: string | string[] | null, registerCmp: boolean, unregisterCmp: boolean, setCmpInfo: SetComponentInfoOptions | null, setCmpInput: SetComponentInputOptions | null, writeRegistry: boolean, readAllInputTypes: boolean): Promise<ComponentRegistry>;
