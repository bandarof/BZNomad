import type ts from "typescript";
import { type ComponentInfo } from "../../../types";
import type { RemixDevToolsSys } from "./index";
export declare function parseRemixRegistryFromFile(sys: RemixDevToolsSys): Promise<{
    sourceFile: ts.SourceFile;
    components: ComponentInfo[];
}>;
export declare function parseRemixRegistryFromCode(sys: RemixDevToolsSys, code: string): Promise<{
    sourceFile: ts.SourceFile;
    components: ComponentInfo[];
}>;
export declare function parseRegistryFromSource(sys: RemixDevToolsSys, sourceFile: ts.SourceFile): Promise<{
    sourceFile: ts.SourceFile;
    components: ComponentInfo[];
}>;
export declare function parseRemixRegisteredComponent(sys: RemixDevToolsSys, sourceFile: ts.SourceFile, cmpObjLit: ts.Node): Promise<ComponentInfo | null>;
