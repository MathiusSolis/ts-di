import { IResolve, IResolverConfig } from "./core/resolver/IResolver";
import { Initializer } from "./core/resolver/Initializer";

class Configure implements IResolverConfig {
    public initResolver(resolver: IResolve): void {
        
    }
}

export default Initializer(Configure);