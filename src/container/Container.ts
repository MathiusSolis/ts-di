import { IScope } from "../decorator/scopes/Scope";

class Container {
    private static dependencies: { [key: string]: IScope } = {};

    public static setDependency(dependency: any) {

    }

    public static async setDelayedDepenmdency(dependency: any) {

    }

    public static async getDependency() {
        
    }
}

export { Container };