import type { VueDevToolsSys } from "./index";
import type { ComponentInfo } from "../../../types";
export declare function parseVueComponent(sys: VueDevToolsSys, filePath: string, readAllInputTypes: boolean): Promise<ComponentInfo | null>;
export declare function getVueComponentsFromPath(sys: VueDevToolsSys, filePath: string, readAllInputTypes: boolean): Promise<ComponentInfo[] | null>;
