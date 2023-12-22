import { Container } from "../../container/Container";
import { Class } from "../../types/types";
import { IScope } from "./Scope";

export const Transient = <Klass extends Class>(Klass: Klass, ctx: ClassDecoratorContext) => {
    Container.setDependency(new TransientScope(Klass));
};

class TransientScope implements IScope {
    public constructor(public Value: any) {}

    public build(): any {
        const transient = new this.Value;
        return () => transient;
    }
}