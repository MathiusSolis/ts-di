export type IBuildFn = () => void;

export interface IScope {
    build(): void;
}