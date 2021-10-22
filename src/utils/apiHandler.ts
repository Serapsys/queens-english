export const invokeApi = (axiosInstance: any, path: any, body={}, method="GET") => {
    if(method === "POST" || method === "PUT"){
        return axiosInstance({
            method: method,
            url: path,
            data: JSON.stringify(body)
        }).then((resp: any) => resp).catch((err: any) => { throw err });
    }
    else if(method==="DELETE"){
        return axiosInstance({
            method: method,
            url: path,
            data: JSON.stringify(body)
        }).then((resp: any) => resp).catch((err: any) => { throw err });   
    } 
    else {
        return axiosInstance({
            method: method,
            url: path,
        }).then((resp: any) => resp).catch((err: any) => { throw err });
    }
}