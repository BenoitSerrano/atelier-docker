import { dataSource } from '../../dataSource';
import { User } from './User.entity';

export { buildUserService };

function buildUserService() {
    const userRepository = dataSource.getRepository(User);

    const userService = {
        getUsername,
    };

    async function getUsername() {
        return { username: 'truc' };
    }

    return userService;
}
