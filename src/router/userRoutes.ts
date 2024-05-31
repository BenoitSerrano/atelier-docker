import { buildUserController } from '../modules/user';
import { routeType } from './types';

const userController = buildUserController();

const userRoutes: Array<routeType<any, any, any>> = [
    {
        method: 'GET',
        path: '/username',
        isAuthenticated: false,
        controller: userController.getUsername,
    },
];

export { userRoutes };
