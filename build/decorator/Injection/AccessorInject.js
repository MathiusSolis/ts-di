"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inject = void 0;
const Container_1 = require("../../container/sync/Container");
const Inject = (key) => (_, __) => {
    return Container_1.Container.getDependency(key).build();
};
exports.Inject = Inject;
//# sourceMappingURL=AccessorInject.js.map