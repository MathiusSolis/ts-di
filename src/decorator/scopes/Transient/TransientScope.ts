import { Class } from "../../../types/types";
import { IScope } from "../Scope";

class TransientScope<Type> implements IScope<Type> {
    public constructor(public name: string, public Value: Class<Type>) {}

    public build(): any {
        const transient = new this.Value;
        return () => transient;
    }
}

export { TransientScope };
