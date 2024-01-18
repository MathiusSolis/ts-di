
import { Container } from "../../../container/sync/Container/Container";
import { Class } from "../../../types/types";
import { VolatileScope } from "./VolatileScope";

export const Volatile = <Klass extends Class>(Klass: Klass, _: ClassDecoratorContext) => {
    // Container.setDependency(new VolatileScope(Klass.name, Klass));
};
