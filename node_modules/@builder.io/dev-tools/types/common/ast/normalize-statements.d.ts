import type ts from "typescript";
import type { DevToolsSys } from "../../types";
export declare function normalizeImports(sys: DevToolsSys, sourceFile: ts.SourceFile): ts.SourceFile;
export declare function normalizeLineBreaks(code: string): string;
export declare function ensureUseClientStringLiteral(code: string): string;
export declare function removeUseClientStringLiteral(sys: DevToolsSys, sourceFile: ts.SourceFile): ts.SourceFile;
export declare function normalizeRegisteredArrayElements(sys: DevToolsSys, elements: ts.Expression[]): ts.Expression[];
