"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VolatileScope = void 0;
class VolatileScope {
    name;
    Value;
    getter;
    constructor(name, Value) {
        this.name = name;
        this.Value = Value;
        const Volatile = Value;
        this.getter = () => new Volatile();
    }
    build() {
        return this.getter;
    }
}
exports.VolatileScope = VolatileScope;
//# sourceMappingURL=VolatileScope.js.map