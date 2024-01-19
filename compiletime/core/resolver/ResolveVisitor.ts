import { SyntaxKind } from "typescript";
import { IMetadataResolver } from "../metadata/IMetadataResolver";
import { GetterVisitor } from "./GetterVisitor";
import { Resolver } from "./Resolver";

export const IsVisitorOf = (syntaxKind: SyntaxKind) => (visitor: Function, ctx: ClassMethodDecoratorContext) => {
    (ctx.metadata as DecoratorMetadataObject)['methods'] ||= {
        instance: { value: null }
    };

    const meta = (ctx.metadata as DecoratorMetadataObject)['methods'] as IMetadataResolver;

    const getterVisitor = new GetterVisitor(visitor, meta.instance);

    Resolver.instance.registerVisitor(
        syntaxKind, getterVisitor
    );
};

export const ResolveVisitor = (Class: { new(): any }, ctx: ClassDecoratorContext) => {
    Class.prototype['metadata'] = ctx.metadata;
};