import { anonymousControllerType } from '../lib/buildController/types';

type methodType = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
type routeType<paramsT, queryT, bodyT> = {
    method: methodType;
    path: string;
    isAuthenticated: false;
    controller: anonymousControllerType<paramsT, queryT, bodyT>;
};

export type { routeType };
