import { invokeApi } from "../utils/apiHandler";
import $axiosProtected from "../utils/axiosUtils";

export const getTriviaData = (accessToken: string): any => {
    $axiosProtected.defaults.headers.common = {
      Authorization: ``,
    };
    return invokeApi($axiosProtected, ``, {}, "GET")
      .then((resp: unknown) => resp).catch((error: any) => {
        throw error;
      })
  };