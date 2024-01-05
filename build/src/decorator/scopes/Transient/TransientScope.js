"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransientScope = void 0;
class TransientScope {
    name;
    Value;
    constructor(name, Value) {
        this.name = name;
        this.Value = Value;
    }
    build() {
        const transient = new this.Value;
        return () => transient;
    }
}
exports.TransientScope = TransientScope;
//# sourceMappingURL=TransientScope.js.map