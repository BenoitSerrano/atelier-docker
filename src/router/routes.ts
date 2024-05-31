import { routeType } from './types';
import { userRoutes } from './userRoutes';

const routes = buildRoutes();

function buildRoutes() {
    const routes: routeType<any, any, any>[] = [];
    routes.push(...userRoutes);
    return routes;
}

export { routes };
