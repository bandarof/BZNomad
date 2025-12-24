import type { DevToolsSys } from "../types";
import type { Credentials } from "./credentials";
import { type GitBackupUploadUrlResult, type GitBackupUploadUrlOptions, type GitBackupRecordOptions, type GitBackupRecordResult, type BackupMetadata, type WorkspaceConfiguration, type CodegenRuntimeStatus, type BackupGitRepoResult } from "$/ai-utils";
interface BackupGitRepoOptions {
    sys: DevToolsSys;
    credentials: Credentials;
    projectId: string;
    branchName: string;
    repoPath: string;
    aiBranch: string;
    featureBranch: string;
    workspace: WorkspaceConfiguration | undefined;
    /**
     * If true, the system is connected to the git provider.
     * If false, the system is offline and will not fetch any branches from origin.
     */
    isConnectedToProvider: boolean;
    debug: boolean;
    forcedFullBackup: boolean;
    canAbortMerge: boolean;
}
/**
 * Creates a backup of git repository changes made by the AI system.
 *
 * This function handles both partial and full backups:
 * - Partial backups: Only include commits created locally (on aiBranch) that aren't in upstream.
 *   This keeps backups small and doesn't store the entire repo's code. Requires a clone from
 *   upstream plus applying the backup to restore.
 * - Full backups: Complete repo backup that can be directly cloned from.
 *
 * The aiBranch is where the AI creates commits as work progresses, while featureBranch
 * is the base branch where work started (usually "main").
 */
export declare function backupGitRepo({ sys, credentials, projectId, branchName, repoPath, aiBranch, featureBranch, workspace, isConnectedToProvider, debug, forcedFullBackup, canAbortMerge, }: BackupGitRepoOptions): Promise<BackupGitRepoResult>;
type InitialCommitHashResult = {
    initialBranch: string;
    initialCommitHash: string | undefined;
    partial: false;
    forcedFullBackup: true;
} | {
    initialBranch: string;
    initialCommitHash: string;
    partial: boolean;
    forcedFullBackup: false;
};
/**
 * Determines the initial commit hash and whether to create a partial or full backup.
 *
 * Partial backups are preferred to keep backup sizes small, but full backups are needed when:
 * - The repo is an example/starter template (users can't push to origin, need to fork)
 * - There's no origin remote configured
 *
 * For partial backups, we fetch the latest state of the chosen upstream branch from origin
 * to ensure the backup has the correct commit range reference.
 */
export declare function getInitialCommitHash({ sys, repoPath, featureBranch, debug, workspace, isConnectedToProvider, forcedFullBackup, credentials, projectId, }: {
    sys: DevToolsSys;
    repoPath: string;
    featureBranch: string;
    debug: boolean;
    workspace: WorkspaceConfiguration | undefined;
    isConnectedToProvider: boolean;
    forcedFullBackup: boolean;
    credentials: Credentials;
    projectId: string;
}): Promise<InitialCommitHashResult>;
/**
 * Requests a signed upload URL for git backup
 */
export declare function requestSignedUploadUrl(credentials: Credentials, body: GitBackupUploadUrlOptions): Promise<GitBackupUploadUrlResult | null>;
/**
 * Records a successful git backup in Firebase
 */
export declare function recordBackup(credentials: Credentials, body: GitBackupRecordOptions): Promise<GitBackupRecordResult>;
export interface GitBackupDownloadResultValid {
    success: true;
    partial: boolean;
    bundlePath: string | undefined;
    bundleSize: number;
    gitBranchName: string;
    lastCommitHash: string;
}
export interface GitBackupDownloadResultInvalid {
    success: false;
    error: Error;
}
export type GitBackupDownloadResult = GitBackupDownloadResultValid | GitBackupDownloadResultInvalid;
/**
 * Downloads a git backup bundle from remote storage.
 * Handles both empty backups (no bundle file) and regular backups with bundle files.
 * @returns The path to the downloaded bundle file, or undefined if it's an empty backup
 */
export declare function downloadGitBackup(sys: DevToolsSys, response: BackupMetadata): Promise<GitBackupDownloadResult>;
/**
 * Uploads a file stream to a signed URL (Google Cloud Storage).
 * Uses MD5 hash for content verification as required by GCS.
 */
export declare function uploadFileStream(filePath: string, signedUrl: string, size: number, contentMd5: string): Promise<Response>;
export declare function computeMD5Hash(bundlePath: string): Promise<{
    contentMd5: string;
    size: number;
}>;
/**
 * Updates the last commit hash in the database for tracking purposes.
 * This is called frequently throughout the codebase (after every commit creation)
 * to track the current state and determine if backups are up-to-date.
 */
export declare function setRuntimeStatus(sys: DevToolsSys, credentials: Credentials, data: CodegenRuntimeStatus): Promise<any>;
/**
 * Computes a unique backup reference string that combines version, repo URL, and commit hash.
 * This reference can be used to identify and retrieve specific backups.
 */
export declare function computeBackupRef(input: {
    version: string | undefined;
    originalRepoUrl: string | undefined;
    commitHash: string | undefined;
}): string | undefined;
export {};
