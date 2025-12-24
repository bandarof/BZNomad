/**
 * Type for methods that can be called on the code generation server
 */
export type CodeGenMethod = (...args: any[]) => any;
/**
 * Type for the code generation server object
 */
export interface CodeGenServer {
    [key: string]: CodeGenMethod | undefined;
}
/**
 * Type guard to check if a value is a valid CodeGenMethod
 */
export declare function isCodeGenMethod(value: any): value is CodeGenMethod;
