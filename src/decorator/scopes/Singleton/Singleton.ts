import { Container } from "../../../container/Container";
import { Class } from "../../../types/types";
import { IScope } from "../Scope";

export const Singleton = <Klass extends Class>(Klass: Klass, ctx: ClassDecoratorContext) => {
    Container.setDependency(new SingletonScope(Klass));
};

export class SingletonScope implements IScope {
    public initielizer: any;

    public constructor(public Value: any) {
        const singleton = new this.Value();
        this.initielizer = () => singleton; 
    }

    public build(): any {
        return this.initielizer;
    }
}