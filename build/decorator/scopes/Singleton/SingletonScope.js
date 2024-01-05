"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingletonScope = void 0;
class SingletonScope {
    constructor(name, Value) {
        this.name = name;
        this.Value = Value;
        const singleton = new this.Value();
        this.initielizer = () => singleton;
    }
    build() {
        return this.initielizer;
    }
}
exports.SingletonScope = SingletonScope;
//# sourceMappingURL=SingletonScope.js.map