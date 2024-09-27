import { Request, Response } from 'express';
import { OrderService } from '../services/orderService';

const orderService = new OrderService();

export const createOrder = async (req: Request, res: Response) => {
    try {
        const order = await orderService.createOrder(req.body);
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar pedido' });
    }
};

export const getOrders = async (req: Request, res: Response) => {
    try {
        const orders = await orderService.getOrders();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar pedidos' });
    }
};

export const getOrderById = async (req: Request, res: Response) => {
    try {
        const order = await orderService.getOrderById(req.params.id);
        if (order) {
            res.status(200).json(order);
        } else {
            res.status(404).json({ message: 'Pedido não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar o pedido' });
    }
};

export const getOrdersByCustomerId = async (req: Request, res: Response) => {
    try {
        const orders = await orderService.getOrdersByCustomerId(req.params.customer_id);
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar pedidos pelo cliente' });
    }
};

export const updateOrder = async (req: Request, res: Response) => {
    try {
        const order = await orderService.updateOrder(req.params.id, req.body);
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar pedido' });
    }
};

export const deleteOrder = async (req: Request, res: Response) => {
    try {
        const deleted = await orderService.deleteOrder(req.params.id);
        if (deleted) {
            res.status(200).json({ message: 'Pedido excluido' });
        } else {
            res.status(404).json({ message: 'Pedido não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir pedido' });
    }
};