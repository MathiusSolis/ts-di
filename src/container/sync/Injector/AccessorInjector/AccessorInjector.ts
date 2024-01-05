import { IScope } from "../../../../decorator/scopes/Scope/Scope";
import { Container } from "../../Container/Container";
import { InjectContainer } from "../../Container/InjectContainer";

class AccessorInjector {
    @InjectContainer private container: Container;

    private dependency!: Required<IScope>;
    
    public injectTo(key: string) {
        this.dependency = this.container.getDependency(key) as Required<IScope>;

        return this;
    }
    
    public thisDependency(key: string) {
        return this;
    }
}

export { AccessorInjector };