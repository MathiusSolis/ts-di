import { IResolve, IResolverConfig } from "./core/resolver/IResolver";
import { Initializer } from "./core/resolver/Initializer";
import { ClassVisitor } from "./transformers/ts-di/Visitors/ClassVisitor";

class Configure implements IResolverConfig {
    public initResolver(resolver: IResolve): void {
        resolver.resolve(ClassVisitor);
    }
}

export default Initializer(Configure);