const User = require('../models/User');
const { generateHash, compare } = require('../utils/HashUtils');
const ResourceNotFoundError = require('../errors/ResourceNotFoundError');
const UnauthorizedError = require('../errors/UnauthorizedError');
const ResourceExistsError = require('../errors/ResourceExistsError');
const BadRequestError = require('../errors/BadRequestError');
const generateAuthToken = require('../utils/AuthUtils');
const passwordValidator = require('../utils/PasswordUtils');
const UserGateway = require('../gateways/UserGateway');

class UserService {

    async userExists(id) {
        try {
            await UserGateway.getUserById(id);
        } catch (err) {
            return false;
        }
        return true
    }

    async register(email, password, first_name, last_name, phone_number, type) {
        if (!passwordValidator.validate(password)) {
            throw new BadRequestError('Password must be at least 8 characters' +
                ' and must include at least one digit.')
        }
        const hashedPassword = await generateHash(password);
        const user = await UserGateway.getUserByEmail(email);
        if (user) {
            throw new ResourceExistsError("Email " + email + " already in use.");
        }
        try {
            return await UserGateway.createUser(email, hashedPassword, first_name, last_name, phone_number, type);
        } catch (err) {
            throw new BadRequestError(err.message);
        }
    }

    async login(email, password) {
        const user = await UserGateway.getUserByEmail(email);
        if (!user) {
            throw new ResourceNotFoundError("No user was found with this email.");
        }
        const match = await compare(password, user.password_hash);
        if (!match) {
            throw new UnauthorizedError("Password entered is incorrect.");
        }
        return await generateAuthToken(user);
    }

    async getUser(id) {
        try {
            return await UserGateway.getUserById(id);
        } catch (err) {
            throw err;
        }
    }

    async updateUserById(id, userObj) {
        if (!await this.getUser(id))
            throw new ResourceNotFoundError('User with id ' + id + ' does not exist.')
        if (userObj.password_hash != null) {
            if (!passwordValidator.validate(userObj.password_hash)) {
                throw new BadRequestError('Password must be at least 8 characters' +
                    ' and must include at least one digit.')
            }
            userObj.password_hash = await generateHash(userObj.password_hash);
        }
        if (userObj.email != null) {
            const user = await UserGateway.getUserByEmail(userObj.email);
            if (user) {
                throw new ResourceExistsError("Email " + userObj.email + " already in use.");
            }
        }
        try {
            return await UserGateway.updateUserById(id, userObj);
        } catch (err) {
            throw new BadRequestError(err.message);
        }
    }
}

module.exports = UserService