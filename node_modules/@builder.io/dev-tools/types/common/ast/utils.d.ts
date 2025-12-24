import type ts from "typescript";
import type { DevToolsSys, ExportType } from "../../types";
export declare function getImportPathFromIdentifier(sys: DevToolsSys, sourceFile: ts.SourceFile, identifierName: string): {
    importPath: string;
    exportType: ExportType;
} | null;
export declare function getFilePathFromIdentifier(sys: DevToolsSys, containerPath: string, sourceFile: ts.SourceFile, identifierName: string): Promise<{
    displayFilePath: string;
    filePath: string;
    relFilePath: string;
    importPath: string;
    exportType: ExportType;
} | null>;
export declare function findVariableStatement(sys: DevToolsSys, sourceFile: ts.SourceFile, variableName: string): {
    statement: ts.VariableStatement;
    statementIndex: number;
} | null;
export declare function findArrayStatementInitializer(sys: DevToolsSys, sourceFile: ts.SourceFile, variableName: string): {
    statement: ts.VariableStatement;
    statementIndex: number;
    variableDeclaration: ts.VariableDeclaration;
    arrayLiteralExp: ts.ArrayLiteralExpression;
} | null;
export declare function hasJsxNode(sys: DevToolsSys, n: ts.Node | undefined): boolean;
export declare function resolveComponentPath(sys: DevToolsSys, filePath: string): Promise<string>;
export declare const RESOLVE_EXTS: string[];
