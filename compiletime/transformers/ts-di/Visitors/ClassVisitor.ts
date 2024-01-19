import { ClassDeclaration, Node, PropertyDeclaration, SyntaxKind } from "typescript";
import { ResolveVisitor, IsVisitorOf } from "../../../core/resolver/ResolveVisitor";

@ResolveVisitor
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