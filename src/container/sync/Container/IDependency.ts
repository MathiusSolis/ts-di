import { IScope } from "../../../decorator/scopes/Scope/Scope";

export interface IDependency {
    [key: string]: IScope
}