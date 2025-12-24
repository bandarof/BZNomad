import type ts from "typescript";
import type { DevToolsSys } from "../../types";
export declare function codeToSource(sys: DevToolsSys, code?: string | null): ts.SourceFile;
export declare function codeToStatement(sys: DevToolsSys, code?: string | null): ts.Statement;
export declare function sourceToCode(sys: DevToolsSys, node: ts.Node | null | undefined, removeComments?: boolean): string;
