import Axios from 'axios';

export const isBrowser = typeof window !== 'undefined';
export const AxiosHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
};

const baseURL= "https://dummyjson.com"

const http = Axios.create({
  baseURL,
  headers: AxiosHeaders,
});

export { http };
