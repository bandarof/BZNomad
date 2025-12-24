/**
 * Any information about a particular component that is necessary
 * to process it correctly.
 */
export interface AngularComponentOptions {
    /**
     * The import name of the `input` signal if used.
     * If `undefined`, then the `input` signal is not used in this component.
     */
    inputSignalImportName?: string;
}
