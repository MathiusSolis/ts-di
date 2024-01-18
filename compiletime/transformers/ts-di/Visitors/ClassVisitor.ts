import { ClassDeclaration, Node, PropertyDeclaration, SyntaxKind } from "typescript";
import { Resolver } from "../../../core/resolver/Resolver";

const IsVisitorOf = (syntaxKind: SyntaxKind) => (_: Function, ctx: ClassMethodDecoratorContext) => {
    const resolver = Resolver.resolver;

    const handle = (node: Node, name: string) => {
        const instance = resolver.getRegisteredVisitor(name);
        instance[_.name](node);
    };

    resolver.registerVisitor(syntaxKind, );
};

// @Resolve
class ClassVisitor {
    @IsVisitorOf(SyntaxKind.ClassDeclaration)
    public visitClass(classDeclaration: ClassDeclaration): Node {
        return classDeclaration;
    }

    @IsVisitorOf(SyntaxKind.PropertyDeclaration)
    public visitProperty(propertyDeclaration: PropertyDeclaration): Node {
        return propertyDeclaration;
    }
}

export { ClassVisitor };