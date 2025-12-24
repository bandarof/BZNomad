import type ts from "typescript";
import type { ComponentInfo } from "../../../types";
import type { AngularDevToolsSys } from "./index";
export declare function parseAngularRegistryFromFile(sys: AngularDevToolsSys): Promise<{
    sourceFile: ts.SourceFile;
    components: ComponentInfo[];
}>;
export declare function parseAngularRegistryFromCode(sys: AngularDevToolsSys, code: string): Promise<{
    sourceFile: ts.SourceFile;
    components: ComponentInfo[];
}>;
export declare function parseRegistryFromSource(sys: AngularDevToolsSys, sourceFile: ts.SourceFile): Promise<{
    sourceFile: ts.SourceFile;
    components: ComponentInfo[];
}>;
export declare function parseAngularRegisteredComponent(sys: AngularDevToolsSys, sourceFile: ts.SourceFile, cmpObjLit: ts.Node): Promise<ComponentInfo | null>;
