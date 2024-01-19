import { Node } from 'typescript';

class GetterVisitor {
    public handle: (node: Node) => Node;

    public constructor(private visitor: Function, private instance: { value: any }) {
        const methodName = visitor.name;

        this.handle = (node: Node): Node => {
            return instance.value[methodName](node);
        }
    }

    public decorate() {
        const original = this.handle;

        const methodName = this.visitor.name;

        const instance = this.instance;

        this.handle = (node: Node): Node => {
            const _node = original(node);
            return instance.value[methodName](_node);
        }
    }
}

export { GetterVisitor };