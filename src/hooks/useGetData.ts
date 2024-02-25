import { UseQueryOptions, useQuery } from '@tanstack/react-query';

const useGetData = () => {
    async function getData() {
        const response = await fetch('https://storage.googleapis.com/bh_dev_bucket/assets/nsp_updated.json');
        const responseData = await response.json()
        return responseData;
    }

    return useQuery({
        queryKey: ['getData1'],
        queryFn: getData,
        // staleTime: Infinity,
        // cacheTime: Infinity
    });
};

export default useGetData;
