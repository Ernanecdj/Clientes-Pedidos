import express from 'express';
import { createOrder, getOrders, getOrderById, getOrdersByCustomerId, updateOrder, deleteOrder} from '../controllers/orderController';

const router = express.Router();

router.post('/orders', createOrder);
router.get('/orders', getOrders);
router.get('/orders/:id', getOrderById);
router.get('/orders/customer/:customer_id', getOrdersByCustomerId);
router.put('/orders/:id', updateOrder);
router.delete('/orders/:id', deleteOrder);

export default router;