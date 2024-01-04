import { Node, SyntaxKind } from "typescript";
import { IsNode } from "../decorators/IsNode";
import { IsVisitor } from "../decorators/IsVisitor";

@IsVisitor
class SourceFileVisitor {
    @IsNode(SyntaxKind.SourceFile)
    public visitSource(sourceFile: Node): Node {
        
        return sourceFile;
    }
}

export { SourceFileVisitor };
