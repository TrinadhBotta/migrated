

class UserOrderService {
    constructor() {
        this.userOrders = new Map();
    }

    static Order = class {
        constructor(orderId, product, quantity, price) {
            this.orderId = orderId;
            this.product = product;
            this.quantity = quantity;
            this.price = price;
        }

        getTotal() {
            return this.quantity * this.price;
        }

        toString() {
            return `${this.orderId}: ${this.product} x ${this.quantity} = $${this.getTotal()}`;
        }
    }

    createOrder(userId, orderId, product, quantity, price) {
        if (quantity <= 0 || price <= 0.0) {
            throw new Error("Quantity and price must be positive");
        }

        const order = new UserOrderService.Order(orderId, product, quantity, price);
        if (!this.userOrders.has(userId)) {
            this.userOrders.set(userId, []);
        }
        this.userOrders.get(userId).push(order);
    }

    getUserOrders(userId) {
        return this.userOrders.get(userId) || [];
    }

    getUserTotal(userId) {
        return this.getUserOrders(userId).reduce((total, order) => total + order.getTotal(), 0);
    }

    printUserSummary(userId) {
        const orders = this.getUserOrders(userId);
        console.log(`User: ${userId}`);
        for (const order of orders) {
            console.log(order.toString());
        }
        console.log(`Total: $${this.getUserTotal(userId)}`);
    }

    cancelOrder(userId, orderId) {
        const orders = this.userOrders.get(userId);
        if (!orders) {
            throw new Error("User not found");
        }
        const index = orders.findIndex(o => o.orderId === orderId);
        if (index === -1) {
            throw new Error("Order ID not found");
        }
        orders.splice(index, 1);
    }
}

module.exports = UserOrderService;