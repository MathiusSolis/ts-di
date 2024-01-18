import { Node } from 'typescript';
import { IResolverContainer } from "./IResolver";

class Resolver implements IResolverContainer {
    public static resolver: IResolverContainer;

    static {
        this.resolver = new Resolver();
    }

    private visitors: any = {

    };


    public registerVisitor(visitor: any): void {
        throw new Error("Method not implemented.");
    }

    public getRegisteredVisitor(key: string) {
        throw new Error("Method not implemented.");
    }

    public resolve(from: any, to: any): void {
        throw new Error("Method not implemented.");
    }
}

export { Resolver };