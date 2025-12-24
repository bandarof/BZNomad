import type { FigmaComponentInfo } from "$/ai-utils";
import type { CLIArgs } from "..";
import type { DevToolsSys } from "../../core";
import type { PublishedComponent, PublishedComponentSet } from "@figma/rest-api-spec";
type Context = {
    sys: DevToolsSys;
    args: CLIArgs;
    debug: (msg: unknown) => void;
    figmaAuth: {
        access_token: string;
        oauth: boolean;
    };
};
/**
 * A component or component set
 */
type FigmaTeamComponent = {
    /** The unique identifier for the component. */
    key: string;
    /** The unique identifier of the Figma file that contains the component. */
    file_key: string;
    /** The unique identifier of the component node within the Figma file. */
    node_id: string;
    /** A URL to a thumbnail image of the component. */
    thumbnail_url?: string;
    /** The name of the component. */
    name: string;
    /** The description of the component as entered by the publisher. */
    description: string;
    /** The component data. */
    componentData?: FigmaComponentInfo;
    /** Whether the component is published. */
    isPublished?: boolean;
};
export declare function extractFigmaIds(url: string): {
    teamId?: string;
    fileKey?: string;
    nodeId?: string;
};
export declare function fetchTeamComponents(context: Context, teamId: string, onProgress: () => void): Promise<PublishedComponent[]>;
export declare function fetchTeamComponentSets(context: Context, teamId: string, onProgress: () => void): Promise<PublishedComponentSet[]>;
/**
 * Returns a list of components and component sets that are present in the file or selection as
 * well as a set of remote keys for components that are referenced but not present.
 */
export declare function processFileOrSelection(context: Context, fileKey: string, nodeId?: string): Promise<{
    fileComponents: FigmaTeamComponent[];
    remoteKeys: Set<string>;
}>;
export declare function fetchRemoteComponentData(context: Context, remoteKeys: Set<string>): Promise<(FigmaTeamComponent | undefined)[]>;
export declare function resolveComponentData(context: Context, components: FigmaTeamComponent[]): Promise<FigmaTeamComponent[]>;
export declare function generateComponentReport(component: FigmaTeamComponent, baseDir: string): Promise<void>;
export declare const runFigmaReport: (sys: DevToolsSys, args: CLIArgs) => Promise<void>;
export {};
