import type { ComponentInfo, SetComponentInfoOptions, SetComponentInputOptions } from "../../types";
export declare function updateRegistry(cmpId: string, srcCmps: ComponentInfo[], regCmps: ComponentInfo[], registerCmp: boolean, unregisterCmp: boolean, setCmpInfo: SetComponentInfoOptions | null, setCmpInput: SetComponentInputOptions | null): {
    addCmpToRegistry: ComponentInfo | null;
    removeCmpFromRegistry: ComponentInfo | null;
    updateRegisteredCmp: ComponentInfo | null;
    nodeIndex: number;
    components: ComponentInfo[];
};
export declare function mergeComponents(sourceComponents: ComponentInfo[], registeredCmps: ComponentInfo[]): ComponentInfo[];
