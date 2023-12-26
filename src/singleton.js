class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this;
        }
        return Singleton.instance;
    }

    // Example method
    someMethod() {
        console.log('Doing something...');
    }
}

// Ensuring that only one instance exists
const instance = new Singleton();
Object.freeze(instance);

// Usage
const singletonA = new Singleton();
const singletonB = new Singleton();

console.log(singletonA === singletonB);  // Output: true

singletonA.someMethod();  // Output: Doing something...
