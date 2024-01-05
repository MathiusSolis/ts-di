import { IScope } from "../../../../decorator/scopes/Scope/Scope";
import { Container } from "../../Container/Container";
import { InjectContainer } from "../../Container/InjectContainer";

class ConstructorInjector {
    @InjectContainer private container: Container;

    private dependency: Array<Required<IScope>> = [];
    
    public injectTo(key: string) {
        this.dependency.push(this.container.getDependency(key) as Required<IScope>);

        return this;
    }
    
    public thisDependency(key: string) {
        return this;
    }
    
    public intoArguments() {
        return this;
    }
}

export { ConstructorInjector };