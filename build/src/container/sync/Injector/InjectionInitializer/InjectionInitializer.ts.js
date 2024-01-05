"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjectionInitializer = void 0;
const Injector_1 = require("../Injector");
const injector = new Injector_1.Injector();
const InjectionInitializer = (Klass, _) => {
    (new Klass()).initInjection(injector);
};
exports.InjectionInitializer = InjectionInitializer;
//# sourceMappingURL=InjectionInitializer.ts.js.map