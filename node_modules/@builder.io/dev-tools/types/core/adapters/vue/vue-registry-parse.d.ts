import type ts from "typescript";
import type { ComponentInfo } from "../../../types";
import type { VueDevToolsSys } from "./index";
export declare function parseVueRegistryFromFile(sys: VueDevToolsSys): Promise<{
    sourceFile: ts.SourceFile;
    components: ComponentInfo[];
}>;
export declare function parseVueRegistryFromCode(sys: VueDevToolsSys, code: string): Promise<{
    sourceFile: ts.SourceFile;
    components: ComponentInfo[];
}>;
export declare function parseRegistryFromSource(sys: VueDevToolsSys, sourceFile: ts.SourceFile): Promise<{
    sourceFile: ts.SourceFile;
    components: ComponentInfo[];
}>;
export declare function parseVueRegisteredComponent(sys: VueDevToolsSys, sourceFile: ts.SourceFile, cmpObjLit: ts.Node): Promise<ComponentInfo | null>;
