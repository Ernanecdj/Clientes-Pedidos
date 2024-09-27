import { Request, Response } from 'express';
import { CustomerService } from '../services/customerService';

const customerService = new CustomerService();

export const createCustomer = async (req: Request, res: Response) => {
    try {
        const customer = await customerService.createCustomer(req.body);
        res.status(201).json(customer);
    } catch (error) {
        res.status(500).json({ error:'Erro ao criar cliente' });
    }
};

export const getCustomers = async (req: Request, res: Response) => {
    try {
        const customers = await customerService.getCustomers();
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({ error:'Erro ao ver clientes' });
    }
};

export const getCustomerById = async (req: Request, res: Response) => {
    try {
        const customer = await customerService.getCustomerById(req.params.id);
        if (customer) {
            res.status(200).json(customer);
        } else {
            res.status(404).json({ message: 'Customer not found' });
        }
    } catch (error) {
        res.status(500).json({ error:'Erro ao ver cliente' });
    }
};

export const updateCustomer = async (req: Request, res: Response) => {
    try {
        const customer = await customerService.updateCustomer(req.params.id, req.body);
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({ error:'Erro ao atualizar cliente' });
    }
};

export const deleteCustomer = async (req: Request, res: Response) => {
    try {
        const deleted = await customerService.deleteCustomer(req.params.id);
        if (deleted) {
            res.status(200).json({ message: 'Cliente excluido!' });
        } else {
            res.status(404).json({ message: 'Cliente não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error:'Erro ao excluir cliente' })
    }
};