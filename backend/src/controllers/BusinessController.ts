import express, {Request, Response} from 'express';
import { BusinessService } from '../services/BusinessService';
import { BusinessMapper } from '../entity_mappers/BusinessMapper';
import auth from '../middleware/auth';
import { BusinessDTO } from 'src/dtos/BusinessDTO';

const businessController = express.Router();
const businessService : BusinessService = new BusinessService();
const businessMapper : BusinessMapper = new BusinessMapper();


export { businessController };
