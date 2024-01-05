"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestScopeInstance = void 0;
const Container_1 = require("../../../container/Container");
const RequestScope_1 = require("./RequestScope");
const RequestScopeInstance = (Klass, _) => {
    Container_1.Container.requestScopeMapper[Klass.name] = new RequestScope_1.RequestScope(Klass.name, Klass);
};
exports.RequestScopeInstance = RequestScopeInstance;
//# sourceMappingURL=Request.js.map