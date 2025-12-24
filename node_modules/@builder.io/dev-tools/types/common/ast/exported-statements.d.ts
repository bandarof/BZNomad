import type ts from "typescript";
import type { DevToolsSys, ModuleFormat } from "../../types";
export declare function getExportedStatements(sys: DevToolsSys, sourceFile: ts.SourceFile, moduleType?: ModuleFormat): ExportedStatement[];
export interface ExportedStatement {
    isDefaultExport: boolean;
    statement: ts.Statement;
    node: ts.Node;
}
