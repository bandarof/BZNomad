import type { ApplyActionsResult } from "../../../ai-utils/src/codegen";
/**
 * Parse git diff output and convert it to ApplyActionsResult array
 * @param diff - The git diff output string
 * @param includeFilesOnly - If true, only populate action and filePath properties
 * @returns Array of ApplyActionsResult objects
 */
export declare function parseGitDiffToApplyActions(diff: string, includeFilesOnly?: boolean): ApplyActionsResult[];
