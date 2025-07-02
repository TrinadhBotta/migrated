class CalculatorService {
    constructor() {
        this.memory = {};
    }

    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        try {
            if (b === 0) throw new Error('Cannot divide by zero');
            return a / b;
        } catch (error) {
            console.error(error.message);
        }
    }

    power(base, exponent) {
        return Math.pow(base, exponent);
    }

    saveToMemory(key, value) {
        this.memory[key] = value;
    }

    recallFromMemory(key) {
        if (!this.memory.hasOwnProperty(key)) throw new Error('Key not found in memory');
        return this.memory[key];
    }

    clearMemory() {
        this.memory = {};
    }

    printOperations() {
        console.log('Available operations:');
        console.log('1. add(a, b)');
        console.log('2. subtract(a, b)');
        console.log('3. multiply(a, b)');
        console.log('4. divide(a, b)');
        console.log('5. power(base, exponent)');
        console.log('6. saveToMemory(key, value)');
        console.log('7. recallFromMemory(key)');
        console.log('8. clearMemory()');
    }
}

const calc = new CalculatorService();

const result1 = calc.add(10, 5);
const result2 = calc.divide(10, 2);
calc.saveToMemory('lastResult', result2);

console.log('Addition: ' + result1);
console.log('Division: ' + result2);
console.log('Memory Value: ' + calc.recallFromMemory('lastResult'));