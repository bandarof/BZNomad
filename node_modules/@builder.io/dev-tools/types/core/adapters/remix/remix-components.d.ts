import type { RemixDevToolsSys } from "./index";
import type ts from "typescript";
import { type ReactComponentSource } from "../react/react-components";
export declare function getRemixSourceComponentsFromDir(sys: RemixDevToolsSys, tsProgram: ts.Program): Promise<ReactComponentSource[]>;
