import { supabase } from '../app';
import { Customer } from '../models/customer';

export class CustomerRepository {
    async createCustomer(customer: Customer): Promise<Customer | null> {
        const { data, error } = await supabase
            .from('customers')
            .insert([customer])
            .single();
        if (error) throw error;
        return data;
    }

    async getCustomers(): Promise<Customer[]> {
        const { data, error } = await supabase.from('customers').select('*');
        if (error) throw error;
        return data;
    }

    async getCustomerById(id: string): Promise<Customer | null> {
        const { data, error } = await supabase
            .from('customers')
            .select('*')
            .eq('id', id)
            .single();
        if (error) throw error;
        return data;
    }

    async updateCustomer(id: string, customer: Partial<Customer>): Promise<Customer | null> {
        const { data, error } = await supabase
            .from('customers')
            .update(customer)
            .eq('id', id)
            .single();
        if (error) throw error;
        return data;
    }

    async deleteCustomer(id: string): Promise<boolean> {
        const { error } = await supabase
            .from('customers')
            .delete()
            .eq('id', id);
        if (error) throw error;
        return true;
    }
}