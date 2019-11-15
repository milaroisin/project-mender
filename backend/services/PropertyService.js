const PropertyGateway = require('../gateways/PropertyGateway');
const UserService = require('./UserService');
const ResourceNotFoundError = require('../errors/ResourceNotFoundError');
const BadRequestError = require('../errors/BadRequestError');
const Status = require('../enums/Status')
const PropertyType = require('../enums/PropertyType')

const userService = new UserService();

class PropertyService {

    async propertyExists(id) {
        try {
            await PropertyGateway.getPropertyById(id);
        } catch (err) {
            return false;
        }
        return true;
    }

    async createProperty(user_id, name, type, address) {
        if (!await userService.userExists(user_id))
            throw new ResourceNotFoundError("User with id " + user_id + " does not exist.")
        try {
            return await PropertyGateway.createProperty(user_id, name, type, address);
        } catch (err) {
            throw new BadRequestError(err.message);
        }
    }

    async getPropertiesByUser(user_id) {
        if (!await userService.userExists(user_id))
            throw new ResourceNotFoundError("User with id " + user_id + " does not exist.")
        try {
            return await PropertyGateway.getPropertiesByUser(user_id);
        } catch (err) {
            throw err;
        }
    }

    async getPropertyById(id) {
        try {
            return await PropertyGateway.getPropertyById(id);
        } catch (err) {
            throw err;
        }
    }

    async updatePropertyById(id, propertyObj){
        if(!await this.getPropertyById(id))
            throw new ResourceNotFoundError('Property with id ' + id + ' does not exist.')
        if(propertyObj.status != null){
            if(!Status.getValue(propertyObj.status)){
                throw new ResourceNotFoundError('Invalid Status. Allowed Types: [' + Status.enums + ']')
            }
        }
        if(propertyObj.type != null){
            if(!PropertyType.getValue(propertyObj.type)){
                throw new ResourceNotFoundError('Invalid Property Type. Allowed Types: [' + PropertyType.enums + ']')
            }
        }
        try {
            return await PropertyGateway.updatePropertyById(id, propertyObj);
        } catch (err) {
            throw err;
        }
    }
}

module.exports = PropertyService
