export interface HostEntry {
    hostname: string;
    ip?: string;
}
export interface SentryLike {
    captureException: (error: unknown) => void;
}
/**
 * Check if a hostname is localhost or 127.0.0.1
 */
export declare function isLocalhost(hostname: string): boolean;
/**
 * Update the /etc/hosts file with new entries in a non-destructive way.
 * This function will:
 * 1. Remove all previously managed entries (marked with special comments)
 * 2. Add new entries with marker comments
 * 3. Preserve all other entries in the file
 *
 * @param entries - Array of host entries to add
 * @param sentry - Optional Sentry instance for error logging
 * @returns true if successful, false otherwise
 */
export declare function updateHostsFile(entries: HostEntry[], sentry?: SentryLike): boolean;
/**
 * Remove all managed entries from the hosts file
 * @param sentry - Optional Sentry instance for error logging
 * @returns true if successful, false otherwise
 */
export declare function clearManagedHostEntries(sentry?: SentryLike): boolean;
/**
 * Check if we have permission to modify the hosts file
 * Returns true if we can write, false otherwise
 */
export declare function canModifyHostsFile(): boolean;
