import { useQuery } from '@tanstack/react-query';
import { api } from '../../lib/api';

function Home() {
    const query = useQuery({
        queryKey: ['home'],
        queryFn: () => api.fetchUsername(),
    });
    console.log(query.data);
    return <div>{query.data ? query.data.username : 'Loading'}</div>;
}

export { Home };
