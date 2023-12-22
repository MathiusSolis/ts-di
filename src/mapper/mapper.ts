const mapper = {
    A: {
        instance: A,
        createInstance: () => new A(),
        next: null,
        build() {

        },
    },
    C: {
        isntance: C,
        createInstance: Container.C, // () => new C()
        next: mapper.A,
        attach() {
            
        },
        build() {
            const requestScope = this.isntance();
            requestScope[this.next.instance.name] = requestScope;
        },
    },
}

mapper.$