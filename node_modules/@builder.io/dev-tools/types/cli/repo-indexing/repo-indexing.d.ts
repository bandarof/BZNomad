import type { DevToolsSys } from "../../types";
import type { CLIArgs } from "../index";
import { type Credentials } from "../credentials";
import type { ComponentTask, TokenTask } from "./types";
export declare const displayComponentLibrarySummary: (components: ComponentTask[], indexedComponents: ComponentTask[], startTime: number, failedComponents: string[] | undefined, isForce: boolean | undefined, designSystemName: string, designSystemId?: string, numIconsIndexed?: number, tokenGroupsFound?: TokenTask[], tokenGroupsToIndex?: TokenTask[], tokenGroupsFailed?: string[]) => void;
export interface RepoIndexingDoc {
    name: string;
    content: string | {
        name: string;
        description: string;
        components: string[];
        relevantFiles: string[];
    }[];
    createdDate: string;
    description: string;
    id: string;
    ownerId: string;
    userId: string;
}
export declare const runRepoIndexing: (sys: DevToolsSys, args: CLIArgs) => Promise<void>;
export declare const isFeatureAllowed: (credentials: Credentials, debug?: boolean) => Promise<{
    isAllowed: boolean;
    reason?: string;
}>;
