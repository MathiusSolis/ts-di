export interface IRegisterVisitor {
    registerVisitor(visitor: any): void
}

export interface IRegisteredVisitor {
    getRegisteredVisitor(key: any): any;
}

export interface IResolve {
    resolve(from: any, to: any): void;
}

export interface IResolverConfig {
    initResolver(resolver: IResolve): void;
}

export interface IResolverContainer extends IRegisterVisitor, IRegisteredVisitor, IResolve {}
