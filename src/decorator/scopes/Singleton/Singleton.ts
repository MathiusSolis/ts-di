import { Container } from "../../../container/Container";
import { Class } from "../../../types/types";
import { SingletonScope } from "./SingletonScope";

export const Singleton = <Klass extends Class>(Klass: Klass, _: ClassDecoratorContext) => {
    Container.setDependency(new SingletonScope(Klass.name, Klass));
};
