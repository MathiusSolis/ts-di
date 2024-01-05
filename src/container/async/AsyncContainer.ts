import { IScope } from "../../decorator/scopes/Scope/Scope";
import { Container } from "../sync/Container";
import { InjectContainer } from "../sync/InjectContainer";

class AsyncContainer {
    @InjectContainer private container!: Container;

    public async setDelayedDepenmdency<DependencyType>(dependency: IScope<DependencyType>): Promise<void> {
        this.container.setDependency(dependency);
    }

    public async getDelayedDependency<DependencyType>(key: string): Promise<IScope<DependencyType>> {
        return this.container.getDependency<DependencyType>(key);
    }
}

export { AsyncContainer };