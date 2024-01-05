"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const IsContainer_1 = require("./IsContainer");
@IsContainer_1.IsContainer
class Container {
    dependencies = {};
    setDependency(dependency) {
        this.dependencies[dependency.name] = dependency;
    }
    getDependency(key) {
        return this.dependencies[key];
    }
}
exports.Container = Container;
//# sourceMappingURL=Container.js.map