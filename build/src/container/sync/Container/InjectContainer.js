"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjectContainer = void 0;
const Container_1 = require("./Container");
const InjectContainer = (container, ctx) => {
    ctx.access.get = Container_1.Container.prototype.instance;
};
exports.InjectContainer = InjectContainer;
//# sourceMappingURL=InjectContainer.js.map