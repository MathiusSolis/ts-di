"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsyncContainer = void 0;
const InjectContainer_1 = require("../sync/InjectContainer");
class AsyncContainer {
    @InjectContainer_1.InjectContainer
    container;
    async setDelayedDepenmdency(dependency) {
        this.container.setDependency(dependency);
    }
    async getDelayedDependency(key) {
        return this.container.getDependency(key);
    }
}
exports.AsyncContainer = AsyncContainer;
//# sourceMappingURL=AsyncContainer.js.map