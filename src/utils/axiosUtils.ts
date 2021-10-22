import Axios from "axios";

const publicHeaders = {
    "Content-Type": "application/x-www-form-urlencoded"
}

const protectedHeaders = {
    'Content-Type': 'application/json; charset=utf-8'
}

// const v1Url = 'https://jservice.io/api/random';
const v1Url = 'https://randomuser.me/api/';

export const $axiosPublic = Axios.create({
    headers: {...publicHeaders},
    timeout:10000,
    baseURL: v1Url
});


const $axiosProtected = Axios.create({
    headers: {...protectedHeaders},
    timeout:10000,
    baseURL: v1Url
});

$axiosProtected.interceptors.request.use(async (config: any) => {
    //@ts-ignore
    return config;
})

export default $axiosProtected;
