"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Volatile = void 0;
const Container_1 = require("../../../container/Container");
const VolatileScope_1 = require("./VolatileScope");
const Volatile = (Klass, _) => {
    Container_1.Container.setDependency(new VolatileScope_1.VolatileScope(Klass.name, Klass));
};
exports.Volatile = Volatile;
//# sourceMappingURL=Volatile.js.map