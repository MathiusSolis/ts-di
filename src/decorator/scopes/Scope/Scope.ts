import { Class } from "../../../types/types";

export type BuildType<Type> = (() => void) | (() => Type);

export type BuildMapped = <Scope, Type = object>(scope: IScope<Scope>, parentInstance: Type) => void

export interface IScope<Type = any> {
    instance?: Class<Type>;
    name: string;
    build: BuildType<Type> | BuildMapped;
}