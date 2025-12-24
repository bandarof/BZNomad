import type { AddCliOptions, FileNode, FolderNode, Snippet, SyncInfo } from "../../types";
export declare function addCommand(opts: AddCliOptions): Promise<SyncInfo | undefined>;
export declare function fetchSnippet(id: string): Promise<Snippet | null>;
export declare function writeFiles(appRootDir: string, snippet: Snippet, files: Array<FileNode | FolderNode>, rootPath: string, addSessionLink: boolean): Promise<FileNode[]>;
export declare function suggestRootPath(appRootDir: string, framework: string): string;
