import express, {Request, Response} from 'express';
import { BusinessUserService } from '../services/BusinessUserService';
import { BusinessUserMapper } from '../entity_mappers/BusinessUserMapper';
import { BusinessMapper } from '../entity_mappers/BusinessMapper';
import { BusinessDTO } from '../dtos/BusinessDTO';
import auth from '../middleware/auth';
import { handleError } from '../utils/HttpUtils';

const userBusinessUsersController = express.Router({ mergeParams: true });
const businessUserService : BusinessUserService = new BusinessUserService();
const businessUserMapper : BusinessUserMapper = new BusinessUserMapper();
const businessMapper : BusinessMapper = new BusinessMapper();

userBusinessUsersController.post(
    '/:businessId', auth, async (req: Request, res: Response) => {
        try {
            const businessUser = await businessUserService.createBusinessUser(
                Number(req.params.businessId), Number(req.params.userId));
            return res.status(200).json(businessUserMapper.toDTO(businessUser));
        } catch (err) {
            return handleError(err, res);
        }
    });

userBusinessUsersController.get('/:businessId', auth, async(req: Request, res: Response) => {
        try {
            const businessUser = await businessUserService.getBusinessUserByData(
                Number(req.params.businessId), Number(req.params.userId));
            return res.status(200).json(businessUserMapper.toDTO(businessUser));
        } catch (err) {
            return handleError(err, res);
        }
    });

userBusinessUsersController.get('/', auth, async(req: Request, res: Response) => {
        try {
            const businessUsers = await businessUserService.getBusinessUsersByUser(Number(req.params.userId));
            const businessesDTO : BusinessDTO[] = [];
            businessUsers.map((businessUser) => {
                businessesDTO.push(businessMapper.toDTO(businessUser.business));
            });
            return res.status(200).json(businessesDTO);
        } catch (err) {
            return handleError(err, res);
        }
    });

export { userBusinessUsersController };
