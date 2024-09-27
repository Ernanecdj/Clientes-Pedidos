import express from 'express';
import { createCustomer, deleteCustomer, getCustomerById, getCustomers, updateCustomer } from '../controllers/customerController';

const router = express.Router();

router.post('/customers', createCustomer);
router.get('/customers', getCustomers);
router.get('/customers', getCustomerById);
router.put('/customers', updateCustomer);
router.delete('/customers', deleteCustomer);

export default router;