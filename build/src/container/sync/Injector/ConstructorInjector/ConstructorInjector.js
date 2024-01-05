"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstructorInjector = void 0;
const InjectContainer_1 = require("../../Container/InjectContainer");
class ConstructorInjector {
    @InjectContainer_1.InjectContainer
    container;
    dependency = [];
    injectTo(key) {
        this.dependency.push(this.container.getDependency(key));
        return this;
    }
    thisDependency(key) {
        return this;
    }
    intoArguments() {
        return this;
    }
}
exports.ConstructorInjector = ConstructorInjector;
//# sourceMappingURL=ConstructorInjector.js.map