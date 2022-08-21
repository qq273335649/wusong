import { instance } from '@/request'
import { AxiosRequestConfig } from 'axios';

export const fetch = (url: AxiosRequestConfig["url"], options: AxiosRequestConfig) => {
    return instance.request({
        url,
        ...options
    })
}
export default fetch;