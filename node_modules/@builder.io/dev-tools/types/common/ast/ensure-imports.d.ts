import type ts from "typescript";
import type { DevToolsSys, ModuleFormat } from "../../types";
export declare function ensureImport(sys: DevToolsSys, sourceFile: ts.SourceFile, opts: EnsureImportOptions, moduleType?: ModuleFormat): ts.SourceFile;
export interface EnsureImportOptions {
    defaultImport?: string;
    namedImports?: string[];
    importPath: string;
    isTypeOnly?: boolean;
}
