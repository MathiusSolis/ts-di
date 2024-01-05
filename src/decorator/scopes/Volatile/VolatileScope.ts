import { Class } from "../../../types/types";
import { IScope } from "../Scope/Scope";


class VolatileScope<Type> implements IScope<Type> {
    public getter: () => Type;

    public constructor(public name: string, public Value: Class<Type>) {
        const Volatile = Value;

        this.getter = () => new Volatile();
    }

    public build(): () => Type {
        return this.getter;
    }
}

export { VolatileScope };
