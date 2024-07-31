import { AppCache} from "../cache/cache";
import { ENVS } from "../config/envs";
import axios from "axios";
import rateLimit from 'axios-rate-limit';



export const SmartLeadApi = rateLimit(axios.create({
    baseURL:ENVS.SMARTLEAD_API_URL
}),{maxRequests:50, perMilliseconds: 80000});

export const smartleadResponseInterceptor = SmartLeadApi.interceptors.response.use((response) => {
    const { headers } = response;
    AppCache.current.setRateLimit(headers['x-ratelimit-limit']);
    AppCache.current.setLimitRemaining(headers['x-ratelimit-remaining']);
    AppCache.current.setRateLimitResetTime(headers['x-ratelimit-reset']);
    return response;
}, (error) => {
    return Promise.reject(error);
});

// export const smartleadRequestInterceptor = SmartLeadApi.interceptors.request.use((request) => {
//     const limit = AppCache.current.getLimitRemaining()
//     return request
// }, (error) => {
//     return Promise.reject(error);
// })