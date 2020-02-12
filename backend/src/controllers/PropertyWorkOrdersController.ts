import express, { Request, Response } from 'express';
import { WorkOrderService } from '../services/WorkOrderService';
import { WorkOrderMapper } from '../entity_mappers/WorkOrderMapper';
import { WorkOrderDTO } from '../dtos/WorkOrderDTO';
import auth from '../middleware/auth';
import { handleError } from '../utils/HttpUtils';
import { validateBody } from '../middleware/requestValidation';
import { WORK_ORDER_FIELDS } from '../constants/BodyFields';

const propertyWorkOrdersController = express.Router({ mergeParams: true });
const workOrderService = new WorkOrderService();
const workOrderMapper = new WorkOrderMapper();

propertyWorkOrdersController.post(
    '/', auth, validateBody(WORK_ORDER_FIELDS.createFields),
    async (req: Request, res: Response) => {
        try {
            req.body.serviceNeeded = Boolean(JSON.parse(req.body.serviceNeeded));
            req.body.emergency = Boolean(JSON.parse(req.body.emergency));
            const workOrderDTO : WorkOrderDTO = req.body as WorkOrderDTO;
            const { decodedToken } = req.body;
            const workOrder = await workOrderService.createWorkOrder(
                Number(req.params.propertyId),
                workOrderMapper.fromDTO(workOrderDTO), decodedToken.userId);

            return res.status(200).json(workOrderMapper.toDTO(workOrder));
        } catch (err) {
            return handleError(err, res);
        }
    },
);

propertyWorkOrdersController.get('/', auth, async(req: Request, res: Response) => {
    try {
        const workOrders = await workOrderService
            .getWorkOrdersByPropertyId(Number(req.params.propertyId));
        const workOrderDTOs : WorkOrderDTO[] = [];
        workOrders.map((workOrder) => {
            workOrderDTOs.push(workOrderMapper.toDTO(workOrder));
        });
        return res.status(200).json(workOrderDTOs);
    } catch (err) {
        return handleError(err, res);
    }
});

export { propertyWorkOrdersController };
