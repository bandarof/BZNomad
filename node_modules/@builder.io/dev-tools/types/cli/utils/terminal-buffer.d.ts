/**
 * Simple terminal buffer that handles basic control sequences
 * to properly represent what would be shown in a real terminal
 */
export declare class TerminalBuffer {
    private lines;
    private currentLine;
    private currentColumn;
    private maxLines;
    private maxColumns;
    private chunks;
    constructor(maxLines?: number, maxColumns?: number);
    write(data: string): void;
    private ensureLineExists;
    getWrite(): string;
    getContent(): string;
    clear(): void;
    /**
     * Get current cursor position for testing/debugging
     */
    getCursorPosition(): {
        line: number;
        column: number;
    };
    /**
     * Get the current number of lines for testing/debugging
     */
    getLineCount(): number;
}
