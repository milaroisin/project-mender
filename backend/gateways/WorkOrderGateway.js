const WorkOrder = require('../models/WorkOrder');
const ResourceNotFoundError = require('../errors/ResourceNotFoundError')

const WorkOrderGateway = {

    //getbyid

    //getall

    //post/create/insert

    //put/patch/update

    //delete

    async getWorkOrdersByUser(user_id) {
        const workorders = await WorkOrder.find({user_id: user_id});
        if (!workorders) {
            throw new ResourceNotFoundError("Work Orders belonging to user_id " + user_id + " do not exist");
        }
        return workorders;
    },

    async getWorkOrderById(id) {
        const workorder = await WorkOrder.findById(id);
        if (!workorder) {
            throw new ResourceNotFoundError("Work Order with id " + id + " does not exist");
        }
        return workorder;
    },
    
    async createWorkOrder(user_id, sector, type, title, cause, 
        service_needed, priority, description, property_id, 
        due_date, date_completed, price_estimate, actual_cost) {
        workorder = new WorkOrder({
            user_id: user_id,
            sector: sector,
            type: type,
            title: title,
            cause: cause, 
            service_needed: service_needed,
            priority: priority,
            description: description,
            property_id: property_id, 
            due_date: due_date, 
            date_completed: date_completed,
            price_estimate: price_estimate, 
            actual_cost: actual_cost
        });
        try {
            return await workorder.save();
        } catch (err) {
            throw new Error(err);
        }
    },

    async updateWork(id, sector, type, title, cause, 
        service_needed, priority, description, due_date, 
        date_completed, price_estimate, actual_cost) {
        workorder = this.getWorkOrderById(id);
        try {
            return await WorkOrder.updateOne({id: id},
                {
                    $set: {
                        sector: sector,
                        type: type,
                        title: title,
                        cause: cause, 
                        service_needed: service_needed,
                        priority: priority,
                        description: description,
                        due_date: due_date, 
                        date_completed: date_completed,
                        price_estimate: price_estimate, 
                        actual_cost: actual_cost
                    }
                }
                );
        } catch (err) {
            throw new Error(err);
        } 
    },

    async deleteWorkOrder(id) {
        try {
            return await WorkOrder.deleteOne({id: id});
        } catch (err) {
            throw new Error(err);
        }
    }
}

module.exports = WorkOrderGateway