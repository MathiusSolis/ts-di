import { Class } from "../../../types/types";
import { IScope } from "../Scope/Scope";

class SingletonScope<Type> implements IScope<Type> {
    public initielizer: () => Type;

    public constructor(public name: string, public Value: Class<Type>) {
        const singleton = new this.Value();
        this.initielizer = () => singleton; 
    }

    public build(): () => Type {
        return this.initielizer;
    }
}

export { SingletonScope };
