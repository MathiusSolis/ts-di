import { IScope } from "../../../decorator/scopes/Scope/Scope";
import { IDependency } from "./IDependency";
import { IsContainer } from "./IsContainer";

@IsContainer
class Container {
    private dependencies: IDependency = {};

    public setDependency<DependencyType>(dependency: IScope<DependencyType>): void {
        this.dependencies[dependency.name] = dependency;
    }

    public getDependency<DependencyType>(key: string): IScope<DependencyType> {
        return this.dependencies[key];
    }
}

export { Container };