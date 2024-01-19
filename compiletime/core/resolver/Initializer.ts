import { TransformationContext, Node, SourceFile, visitNode, visitEachChild, updateSourceFile } from "typescript";
import { IResolverConfig } from "./IResolver";
import { Resolver } from "./Resolver";

const Initializer = (Configuration: { new(): IResolverConfig }) => {
    const config = new Configuration();

    const resolver = Resolver.instance;

    config.initResolver(resolver);

    const transform = () => {
        return (ctx: TransformationContext) => {
            return (sourceFile: SourceFile) => {
                function visit(sourceFile: SourceFile): Node {
                    const children = sourceFile.getChildren();
                    const count = children.length;

                    const newChildren: Array<Node> = []

                    for (let index = 0; index < count; index++) {
                        const node = children[index];

                        const visitor = resolver.getRegisteredVisitor(node.kind);
                        
                        if (visitor) {
                            const newNode = visitor.handle(node);
                            // if (node !== newNode)
                            // TODO: Validar nodos 
                        }
                    }
                    
                    return sourceFile;
                }
                return visitNode(sourceFile, visit);
            };
        };
    }

    return transform;
}

export { Initializer };
