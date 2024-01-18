import { TransformationContext, Node, SourceFile, visitNode, visitEachChild } from "typescript";
import { IResolverConfig } from "./IResolver";
import { Resolver } from "./Resolver";

const Initializer = (Configuration: { new(): IResolverConfig }) => {
    const config = new Configuration();

    const resolver = Resolver.getResolver();

    config.initResolver(resolver);

    const transform = () => {
        return (ctx: TransformationContext) => {
            return (sourceFile: SourceFile) => {
                function visit(sourceFile: SourceFile): Node {
                    const children = sourceFile.getChildren();
                    const count = children.length;

                    for (let index = 0; index < count; index++) {
                        resolver.getRegisteredVisitor[children[index]]();
                    }
                    
                    return sourceFile; // TODO: Here return transform visitors.
                }
                return visitNode(sourceFile, visit);
            };
        };
    }

    return transform;
}

export { Initializer };
