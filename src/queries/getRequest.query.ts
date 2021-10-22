import { useQuery } from "react-query";

const useGetRequest = (queryName: string, axiosHook: any) => {

 
  const queryData = useQuery(queryName, () => axiosHook());

  return queryData;
};

export default useGetRequest;
