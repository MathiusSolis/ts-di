"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Injector = void 0;
const AccessorInjector_1 = require("./AccessorInjector/AccessorInjector");
const ConstructorInjector_1 = require("./ConstructorInjector/ConstructorInjector");
class Injector {
    constructor() {
        this.injectToConstructor = new ConstructorInjector_1.ConstructorInjector();
        this.accessors = new AccessorInjector_1.AccessorInjector();
    }
}
exports.Injector = Injector;
//# sourceMappingURL=Injector.js.map