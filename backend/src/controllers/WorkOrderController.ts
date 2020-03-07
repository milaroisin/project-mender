import express, { Request, Response } from 'express';
import { WorkOrderService } from '../services/WorkOrderService';
import { WorkOrderMapper } from '../entity_mappers/WorkOrderMapper';
import auth from '../middleware/auth';
import { handleError } from '../utils/HttpUtils';
import { WorkOrderDTO } from 'src/dtos/WorkOrderDTO';

const workOrderService = new WorkOrderService();
const workOrderMapper = new WorkOrderMapper();

const workOrderController = express.Router();

workOrderController.get('/', auth, async(req: Request, res: Response) => {
    try {
        const workOrders = await workOrderService.getWorkOrders(new Map(Object.entries(req.query)));
        const workOrderDTOs : WorkOrderDTO[] = [];
        workOrders.map((workOrder) => {
            workOrderDTOs.push(workOrderMapper.toDTO(workOrder));
        });
        return res.status(200).json(workOrderDTOs);
    } catch (err) {
        return handleError(err, res);
    }
});

workOrderController.get('/:id', auth, async(req: Request, res: Response) => {
    try {
        const workOrder = await workOrderService.getWorkOrder(Number(req.params.id));
        return res.status(200).json(workOrderMapper.toDTO(workOrder));
    } catch (err) {
        return handleError(err, res);
    }
});

workOrderController.patch('/:id', auth, async(req: Request, res: Response) => {
    try {
        const { decodedToken } = req.body;
        const workOrderDTO : WorkOrderDTO = req.body as WorkOrderDTO;
        await workOrderService.updateWorkOrderById(
            Number(req.params.id), workOrderMapper.fromDTO(workOrderDTO), decodedToken.userId);
        return res.status(204).end();
    } catch (err) {
        return handleError(err, res);
    }
});

export { workOrderController };
