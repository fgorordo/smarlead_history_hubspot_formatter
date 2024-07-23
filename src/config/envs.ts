import dotenv from "dotenv";

dotenv.config();

export const ENVS = {
    SMARTLEAD_API_KEY: process.env.SMARTLEAD_API_KEY,
    SMARTLEAD_API_URL: process.env.SMARTLEAD_API_URL,
};