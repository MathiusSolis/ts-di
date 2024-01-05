import { Container } from "../../../container/Container";
import { Class } from "../../../types/types";
import { RequestScope } from "./RequestScope";

export const RequestScopeInstance = <Klass extends Class>(Klass: Klass, _: ClassDecoratorContext) => {
    Container.requestScopeMapper[Klass.name] = new RequestScope(Klass.name, Klass);
};