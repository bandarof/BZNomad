import type { DevToolsSys } from "../types";
export declare function interactiveSelectFiles(sys: DevToolsSys, allFiles: string[], appRootDir: string, initialFiles: string[], selectedFilePaths: Map<string, number>, MAX_TOKENS: number): Promise<string[]>;
export declare function selectMostRelevantFile(sys: DevToolsSys, allFiles: string[], appRootDir: string, selectedFilePaths: Map<string, number>, MAX_TOKENS: number, wasBad: boolean): Promise<string | null>;
