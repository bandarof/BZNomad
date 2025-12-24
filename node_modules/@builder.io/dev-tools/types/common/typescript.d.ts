import type ts from "typescript";
import type { DevToolsSys, TranspileFileOptions, TranspileModuleOptions, TranspileResult } from "../types";
export declare function createTsProgram(sys: DevToolsSys, filePaths: string[], overrideTsOptions?: ts.CompilerOptions): Promise<ts.Program>;
export declare function getTypeChecker(sys: DevToolsSys, filePath: string, tsProgram: ts.Program | null): Promise<{
    typeChecker: ts.TypeChecker;
    sourceFile: ts.SourceFile;
}>;
export declare function transpileFile(sys: DevToolsSys, opts: TranspileFileOptions): Promise<TranspileResult>;
export declare function transpileModule(sys: DevToolsSys, opts: TranspileModuleOptions): TranspileResult;
