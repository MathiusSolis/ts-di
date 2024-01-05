import { AccessorInjector } from "./AccessorInjector/AccessorInjector";
import { ConstructorInjector } from "./ConstructorInjector/ConstructorInjector";

class Injector {
    public injectToConstructor = new ConstructorInjector();
    public accessors = new AccessorInjector();
}

export { Injector };
