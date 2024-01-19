import { Node, SyntaxKind } from 'typescript';
import { IResolverContainer } from "./IResolver";
import { GetterVisitor } from './GetterVisitor';
import { IMetadataResolver } from '../metadata/IMetadataResolver';

class Resolver implements IResolverContainer {
    public static instance: IResolverContainer;

    static {
        this.instance = new Resolver();
    }

    private visitors: { [index: string]: GetterVisitor } = {};

    public registerVisitor(key: string | SyntaxKind, visitor: GetterVisitor): void {
        this.visitors[key] = visitor;
    }

    public getRegisteredVisitor(key: string | SyntaxKind): GetterVisitor {
        return this.visitors[key];
    }

    public resolve<Type>(Visitor: new () => Type): void {
        const instance = new Visitor();

        const metadata = Visitor.prototype.metadata as IMetadataResolver;

        metadata.instance.value = instance;
    }
}

export { Resolver };