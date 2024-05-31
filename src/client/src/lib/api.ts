import { config } from '../config';

const api = {
    fetchUsername,
};

const BASE_URL = `${config.API_URL}/api`;

async function performApiCall(url: string, method: 'GET') {
    let response: Response;

    response = await fetch(url, { method });

    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json();
}

async function fetchUsername() {
    const URL = `${BASE_URL}/username`;
    return performApiCall(URL, 'GET');
}

export { api };
