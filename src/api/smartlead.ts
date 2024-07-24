import { AppCache} from "../cache/cache";
import { ENVS } from "../config/envs";
import axios from "axios";

export const SmartLeadApi = axios.create({
    baseURL:ENVS.SMARTLEAD_API_URL
});

export const smartleadResponseInterceptor = SmartLeadApi.interceptors.response.use((response) => {
    const { headers } = response;
    AppCache.current.setRateLimit(headers['x-ratelimit-limit']);
    AppCache.current.setLimitRemaining(headers['x-ratelimit-remaining']);
    AppCache.current.setRateLimitResetTime(headers['x-ratelimit-reset']);
    return response;
}, (error) => {
    return Promise.reject(error);
})