import { SyntaxKind } from 'typescript';

export const IsNode = (type: SyntaxKind) => (method: Function, ctx: ClassMemberDecoratorContext) => {
    
    let visitors = ctx.metadata!.visitor as Array<any> | null;

    if (!visitors)  {
        visitors = [];
        ctx.metadata!.visitors = visitors;
    };

    visitors.push({
        type,
        method
    });
};