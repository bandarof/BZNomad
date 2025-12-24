import type ts from "typescript";
import type { DevToolsSys } from "../../types";
export declare function ensureArrayStatement(sys: DevToolsSys, sourceFile: ts.SourceFile, opts: EnsureArrayStatementOptions): ts.SourceFile;
export interface EnsureArrayStatementOptions {
    variableName: string;
    arrayType?: string;
}
