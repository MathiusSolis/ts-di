import { Node, SourceFile } from "typescript";

// Class Decorator Injectable
// next
// Class Decorator 

class SourceFileVisitor {
    public visitSource(sourceFile: SourceFile): Node {
        
        return sourceFile;
    }
}

export { SourceFileVisitor };
