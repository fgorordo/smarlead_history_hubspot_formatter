import { Campaigns } from "../models/campaign.model";

export class AppCache {
    private rateLimit: number;
    private rateLimitRemaining: number;
    private rateLimitResetTime: number;
    private allCampaigns: Campaigns;

    constructor(rateLimit: number, rateLimitRemaining: number, rateLimitReset: number, allCampaigns: Campaigns) {
        this.rateLimit = rateLimit;
        this.rateLimitRemaining = rateLimitRemaining;
        this.rateLimitResetTime = rateLimitReset;
        this.allCampaigns = allCampaigns;
    }

    public setRateLimit(limit: string) {
        this.rateLimit = +limit;
    }

    public setLimitRemaining(limitRemaining: string) {
        this.rateLimitRemaining = +limitRemaining;
    }

    public setRateLimitResetTime(resetTime: string) {
        this.rateLimitResetTime = +resetTime;
    }

    public setCampaigns(campaings: Campaigns) {
        this.allCampaigns = campaings;
    }

    public getAllCampaigns() {
        return this.allCampaigns;
    }

    public getRateLimit() {
        return this.rateLimit;
    }

    public getLimitRemaining() {
        return this.rateLimitRemaining
    }
    
    public getLimitResetTime() {
        return this.rateLimitResetTime;
    }

    public static current = new AppCache(60,59,0,[]);
};