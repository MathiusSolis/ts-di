import { Class } from "../../../../types/types";
import { Injector } from "../Injector";
import { IInjectorInitializer } from "./IInjectionInitializer";

const injector: Injector = new Injector();

export const InjectionInitializer = <Type extends IInjectorInitializer>(Klass: Class<Type>, _:ClassDecoratorContext) => {
    (new Klass()).initInjection(injector);
};