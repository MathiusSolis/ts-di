import { Container } from "../../container/sync/Container";


export const Inject = (key?: string) => <Type>(_: Type, __: ClassFieldDecoratorContext) => {
    return Container.getDependency<Type>(key as string).build();
};