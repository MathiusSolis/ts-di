import { Class } from "../../../types/types";

export const IsContainer = <KlassType>(Klass: Class<KlassType>, _: ClassDecoratorContext) => {
    if (!Klass.prototype.instance) {
        const container = new Klass();
        Klass.prototype.isntance = () => container;
    }
};