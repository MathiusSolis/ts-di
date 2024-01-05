"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsContainer = void 0;
const IsContainer = (Klass, _) => {
    if (!Klass.prototype.instance) {
        const container = new Klass();
        Klass.prototype.isntance = () => container;
    }
};
exports.IsContainer = IsContainer;
//# sourceMappingURL=IsContainer.js.map