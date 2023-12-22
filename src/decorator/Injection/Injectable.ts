import { Singleton } from "../scopes/Singleton/Singleton";

export const Injectable = (Scope: Function = Singleton) => Scope;