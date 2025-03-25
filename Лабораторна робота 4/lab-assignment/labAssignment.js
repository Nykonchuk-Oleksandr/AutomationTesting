class UserService {
    constructor(getFullName) {
        this.getFullName = getFullName;
    }

    greet() {
        const fullName = this.getFullName('John', 'Doe');
        return `HELLO, ${fullName.toUpperCase()}!`;
    }
}

async function asyncHello() {
    return "hello world";
}

async function asyncError() {
    throw new Error("Something went wrong");
}

function computeValue() {
    return 94;
}

class ApiClient {
    async fetchData() {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        return { ...data, fetchedAt: Date.now() };
    }
}

class ApiHelper {
    constructor(apiCallFunction) {
        this.apiCallFunction = apiCallFunction;
    }

    async fetchViaHelper() {
        return await this.apiCallFunction();
    }
}

function calculateFinalPrice(order) {
    if (!order.items || order.items.length === 0 || order.items.some(item => item.price < 0 || item.quantity < 0)) {
        throw new Error("Invalid order data");
    }

    let subtotal = order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    let discount = Math.min(subtotal * (order.discount || 0), subtotal * 0.5);
    let total = subtotal - discount;
    total += total * (order.tax || 0);

    return Math.round(total * 100) / 100;
}

class OrderProcessor {
    constructor(currencyConverter) {
        this.currencyConverter = currencyConverter;
    }

    processOrder(order) {
        try {
            return this.currencyConverter(order.total, order.currency);
        } catch {
            return order.total;
        }
    }
}

module.exports = {
    UserService,
    asyncHello,
    asyncError,
    computeValue,
    ApiClient,
    ApiHelper,
    calculateFinalPrice,
    OrderProcessor
};
