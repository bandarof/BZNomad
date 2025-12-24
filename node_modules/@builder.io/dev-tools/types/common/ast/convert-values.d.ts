import type ts from "typescript";
import type { DevToolsSys } from "../../types";
export declare function setObjectExpressionProperty(sys: DevToolsSys, obj: ts.ObjectLiteralExpression, propName: string, propValue: any, deleteIfNullOrUndefined?: boolean): ts.ObjectLiteralExpression;
export declare function getObjLiteralPropertyIndex(sys: DevToolsSys, obj: ts.ObjectLiteralExpression, propName: string): number;
export declare function expressionToValue(sys: DevToolsSys, exp: ts.Expression): any;
export declare function objectExpressionToObjectValue(sys: DevToolsSys, objectLiteral: ts.ObjectLiteralExpression): {
    [key: string]: any;
};
export declare function convertArrayExpressionToJsArray(sys: DevToolsSys, arr: ts.ArrayLiteralExpression): any[];
export declare function getTextOfPropertyName(sys: DevToolsSys, prop: ts.PropertyAssignment | ts.ObjectLiteralElementLike | undefined): string | undefined;
export declare function valueToExpression(sys: DevToolsSys, val: any): ts.ObjectLiteralExpression | ts.Identifier | ts.StringLiteral | ts.NumericLiteral | ts.TrueLiteral | ts.FalseLiteral | ts.ArrayLiteralExpression;
