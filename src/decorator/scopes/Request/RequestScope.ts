import { Class } from "../../../types/types";
import { BuildMapped, IScope } from "../Scope/Scope";

class RequestScope<Type> implements IScope<Type> {
    public next: IScope<Class>;

    public build: BuildMapped;
    
    public constructor(
        public name: string,
        public Value: Class<Type>,
        public isLast: boolean = true,
        public isRoot: boolean = false,
        public isDelayed: boolean = false
    ) {
        if(isRoot) this.build = () => {
            const instance = new Value();
            this.next.build(this, instance);
        }
        else this.build = <ScopeType, Type>(scope: IScope<ScopeType>, parentInstance: Type) => {
            const instance = new Value();
            parentInstance[this.name] = instance;
            this.next.build(this, instance);
        }
    }

    public copy(): RequestScope<Type> {
       const requestScope = new RequestScope(this.name, this.Value);
       requestScope.build = this.build;
       return requestScope;
    }
}

export { RequestScope };