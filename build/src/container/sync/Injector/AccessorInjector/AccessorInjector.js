"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessorInjector = void 0;
const InjectContainer_1 = require("../../Container/InjectContainer");
class AccessorInjector {
    @InjectContainer_1.InjectContainer
    container;
    dependency;
    injectTo(key) {
        this.dependency = this.container.getDependency(key);
        return this;
    }
    thisDependency(key) {
        return this;
    }
}
exports.AccessorInjector = AccessorInjector;
//# sourceMappingURL=AccessorInjector.js.map