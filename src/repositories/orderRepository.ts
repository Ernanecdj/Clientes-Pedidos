import { supabase } from '../app';
import { Order } from '../models/order';

export class OrderRepository {
    
    async createOrder(order: Order): Promise<Order | null> {
        const { data, error } = await supabase
            .from('orders')
            .insert([order])
            .single();
        if (error) throw error;
        return data;
    }

    async getOrders(): Promise<Order[]> {
        const { data, error } = await supabase.from('orders').select('*');
        if (error) throw error;
        return data;
    }

    async getOrderById(id: string): Promise<Order | null> {
        const { data, error } = await supabase
            .from('orders')
            .select('*')
            .eq('id', id)
            .single();
        if (error) throw error;
        return data;
    }

    async getOrdersByCustomerId(customer_id: string): Promise<Order[]> {
        const { data, error } = await supabase
            .from('orders')
            .select('*')
            .eq('customer_id', customer_id);
        if (error) throw error;
        return data;
    }

    async updateOrder(id: string, order: Partial<Order>): Promise<Order | null> {
        const { data, error } = await supabase
            .from('orders')
            .update(order)
            .eq('id', id)
            .single();
        if (error) throw error;
        return data;
    }

    async deleteOrder(id: string): Promise<boolean> {
        const { error } = await supabase
            .from('orders')
            .delete()
            .eq('id', id);
        if (error) throw error;
        return true;
    }
}