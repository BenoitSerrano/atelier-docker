import { buildUserService } from './user.service';

export { buildUserController };

function buildUserController() {
    const userService = buildUserService();
    const userController = {
        getUsername,
    };

    return userController;

    async function getUsername() {
        return userService.getUsername();
    }
}
