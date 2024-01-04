export const IsVisitor = <Klass>(
    klass: { new(...args: Array<any>): Klass },
    ctx: ClassDecoratorContext
) => {
    let visitors = ctx.metadata!.visitor as Array<any>;

    for (let index = 0; index < visitors.length; index++) {
        const element = visitors[index];
        klass.prototype[element.type] = element.method;
    }
};