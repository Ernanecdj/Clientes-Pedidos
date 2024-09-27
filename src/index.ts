import express from 'express';
import customerRoutes from './routes/customerRoutes';
import orderRoutes from './routes/orderRoutes';

const app = express();

app.use(express.json());

app.use('/api', customerRoutes);
app.use('/api', orderRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});