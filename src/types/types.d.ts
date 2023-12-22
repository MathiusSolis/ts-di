export interface Class<Args = any, Type = any> {
    new(...args: Array<Args>): Type
}