import { type ComponentRegistry, type SetComponentInfoOptions, type SetComponentInputOptions } from "../../../types";
import type { RemixDevToolsSys } from "./index";
export declare function remixComponentRegistry(sys: RemixDevToolsSys, cmpId: string | string[] | null, registerCmp: boolean, unregisterCmp: boolean, setCmpInfo: SetComponentInfoOptions | null, setCmpInput: SetComponentInputOptions | null, writeRegistry: boolean, readAllInputTypes: boolean): Promise<ComponentRegistry>;
