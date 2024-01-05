import { Container } from "../../../container/Container";
import { Class } from "../../../types/types";
import { TransientScope } from "./TransientScope";

export const Transient = <Klass extends Class>(Klass: Klass, ctx: ClassDecoratorContext) => {
    Container.setDependency(new TransientScope(Klass.name, Klass));
};
