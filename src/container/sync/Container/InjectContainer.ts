import { Container } from "./Container";

export const InjectContainer = (container: any, ctx: ClassFieldDecoratorContext) => {
    ctx.access.get = (Container.prototype as any).instance;
};