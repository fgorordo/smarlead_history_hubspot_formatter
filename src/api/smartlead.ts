import { ENVS } from "../config/envs";
import axios from "axios";

export const SmartLeadApi = axios.create({
    baseURL:ENVS.SMARTLEAD_API_URL
})