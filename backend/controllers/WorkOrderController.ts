import express, {Request, Response} from 'express';

import WorkOrderService from '../services/WorkOrderService';
const { handleError } = require('../utils/HttpUtils');
const auth = require('../middleware/auth');

const workOrderController = express.Router();

workOrderController.get('/:id', auth, async(req: Request, res: Response) => {
    try {
        const workOrder = await WorkOrderService.getWorkOrder(req.params.id);
        return res.status(200).json(workOrder);
    } catch (err) {
        return handleError(err, res);
    } 
})

export {workOrderController};
