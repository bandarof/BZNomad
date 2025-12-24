import type ts from "typescript";
import type { ComponentInfo } from "../../../types";
import type { QwikDevToolsSys } from "./index";
export declare function parseQwikRegistryFromFile(sys: QwikDevToolsSys): Promise<{
    sourceFile: ts.SourceFile;
    components: ComponentInfo[];
}>;
export declare function parseQwikRegistryFromCode(sys: QwikDevToolsSys, code: string): Promise<{
    sourceFile: ts.SourceFile;
    components: ComponentInfo[];
}>;
export declare function parseRegistryFromSource(sys: QwikDevToolsSys, sourceFile: ts.SourceFile): Promise<{
    sourceFile: ts.SourceFile;
    components: ComponentInfo[];
}>;
export declare function parseQwikRegisteredComponent(sys: QwikDevToolsSys, sourceFile: ts.SourceFile, cmpObjLit: ts.Node): Promise<ComponentInfo | null>;
