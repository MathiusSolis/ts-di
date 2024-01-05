"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Singleton = void 0;
const Container_1 = require("../../../container/Container");
const SingletonScope_1 = require("./SingletonScope");
const Singleton = (Klass, _) => {
    Container_1.Container.setDependency(new SingletonScope_1.SingletonScope(Klass.name, Klass));
};
exports.Singleton = Singleton;
//# sourceMappingURL=Singleton.js.map