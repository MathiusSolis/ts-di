"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestScope = void 0;
class RequestScope {
    constructor(name, Value, isLast = true, isRoot = false, isDelayed = false) {
        this.name = name;
        this.Value = Value;
        this.isLast = isLast;
        this.isRoot = isRoot;
        this.isDelayed = isDelayed;
        if (isRoot)
            this.build = () => {
                const instance = new Value();
                this.next.build(this, instance);
            };
        else
            this.build = (scope, parentInstance) => {
                const instance = new Value();
                parentInstance[this.name] = instance;
                this.next.build(this, instance);
            };
    }
    copy() {
        const requestScope = new RequestScope(this.name, this.Value);
        requestScope.build = this.build;
        return requestScope;
    }
}
exports.RequestScope = RequestScope;
//# sourceMappingURL=RequestScope.js.map