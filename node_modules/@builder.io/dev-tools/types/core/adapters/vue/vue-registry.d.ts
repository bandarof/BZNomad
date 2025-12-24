import type { ComponentRegistry } from "../../../types";
import type { VueDevToolsSys } from "./index";
export declare function vueComponentRegistry(sys: VueDevToolsSys, options: {
    readAllInputTypes: boolean;
}): Promise<ComponentRegistry>;
