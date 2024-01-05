"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transient = void 0;
const Container_1 = require("../../../container/Container");
const TransientScope_1 = require("./TransientScope");
const Transient = (Klass, ctx) => {
    Container_1.Container.setDependency(new TransientScope_1.TransientScope(Klass.name, Klass));
};
exports.Transient = Transient;
//# sourceMappingURL=Transient.js.map