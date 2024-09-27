import { CustomerRepository } from '../repositories/customerRepository';
import { Customer } from '../models/customer';

export class CustomerService {
    private customerRepository: CustomerRepository;

    constructor() {
        this.customerRepository = new CustomerRepository();
    }

    // Criar cliente
    async createCustomer(customer: Customer): Promise<Customer | null> {
        return await this.customerRepository.createCustomer(customer);
    }

    // Obter todos os clientes
    async getCustomers(): Promise<Customer[]> {
        return await this.customerRepository.getCustomers();
    }

    // Obter cliente por ID
    async getCustomerById(id: string): Promise<Customer | null> {
        return await this.customerRepository.getCustomerById(id);
    }

    // Atualizar cliente
    async updateCustomer(id: string, customer: Partial<Customer>): Promise<Customer | null> {
        return await this.customerRepository.updateCustomer(id, customer);
    }

    // Deletar cliente
    async deleteCustomer(id: string): Promise<boolean> {
        return await this.customerRepository.deleteCustomer(id);
    }
}