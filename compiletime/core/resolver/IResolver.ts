import { SyntaxKind } from "typescript";
import { GetterVisitor } from "./GetterVisitor";

export interface IRegisterVisitor {
    registerVisitor(key: SyntaxKind | string, visitor: GetterVisitor): void
}

export interface IRegisteredVisitor {
    getRegisteredVisitor(key: SyntaxKind | string): GetterVisitor;
}

export interface IResolve {
    resolve<Type>(visitor: { new (): Type }): void;
}

export interface IResolverConfig {
    initResolver(resolver: IResolve): void;
}

export interface IResolverContainer extends IRegisterVisitor, IRegisteredVisitor, IResolve {}
