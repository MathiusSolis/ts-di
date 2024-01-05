import { Injector } from "../Injector";

export interface IInjectorInitializer {
    initInjection(injector: Injector): void;
}
