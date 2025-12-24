import type ts from "typescript";
import type { DevToolsSys, ModuleFormat } from "../../types";
import type { ExportedStatement } from "./exported-statements";
export declare function getImportedStatements(sys: DevToolsSys, sourceFile: ts.SourceFile, moduleType?: ModuleFormat): ExportedStatement[];
