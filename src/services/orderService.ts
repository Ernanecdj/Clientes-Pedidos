import { OrderRepository } from '../repositories/orderRepository';
import { Order } from '../models/order';

export class OrderService {
    private orderRepository: OrderRepository;

    constructor() {
        this.orderRepository = new OrderRepository();
    }

    async createOrder(order: Order): Promise<Order | null> {
        return await this.orderRepository.createOrder(order);
    }

    async getOrders(): Promise<Order[]> {
        return await this.orderRepository.getOrders();
    }

    async getOrderById(id: string): Promise<Order | null> {
        return await this.orderRepository.getOrderById(id);
    }

    async getOrdersByCustomerId(customer_id: string): Promise<Order[]> {
        return await this.orderRepository.getOrdersByCustomerId(customer_id);
    }

    async updateOrder(id: string, order: Partial<Order>): Promise<Order | null> {
        return await this.orderRepository.updateOrder(id, order);
    }

    async deleteOrder(id: string): Promise<boolean> {
        return await this.orderRepository.deleteOrder(id);
    }
}