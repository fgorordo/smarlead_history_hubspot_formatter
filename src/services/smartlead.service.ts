import { AxiosResponse } from "axios";
import { SmartLeadApi } from "../api/smartlead";
import { ENVS } from "../config/envs";
import { Campaign, Campaigns } from "../models/campaign.model";
import { CampaignAnalytics } from "../models/analytics.model";
import { loadingSpinner } from "../cli/loading";
import { CampaingLeadInformation } from "../models/leads.model";
import { LeadEmails } from "../models/email.model";

export const getCampaigns = async ():Promise<Campaigns> => {
    const loading = loadingSpinner('Loading campaigns from Smartlead API').start()
    const response = await SmartLeadApi.get<Campaigns>(`/campaigns?api_key=${ENVS.SMARTLEAD_API_KEY}`)
    const { data } = response;
    loading.stop();
    return data;
}

export const getCampaignTopLevelInformationByID = async (id: number): Promise<CampaignAnalytics> => {
    const loading = loadingSpinner(`Fetching analytics for campaign #${id}`).start()
    const response = await SmartLeadApi.get<CampaignAnalytics>(`/campaigns/${id}/analytics?api_key=${ENVS.SMARTLEAD_API_KEY}`);
    const { data } = response;
    loading.stop();
    return data;
}

export const getCampaingsLeadsById = async (id: number) => {
    const loading = loadingSpinner(`Fetching selected campaing leads`).start();
    const response = await SmartLeadApi.get<CampaingLeadInformation>(`/campaigns/${id}/leads?api_key=${ENVS.SMARTLEAD_API_KEY}`);
    const { data } = response;
    const leads = data.data.map(daum => daum.lead);
    loading.stop();
    return leads;
};

export const getLeadsEmailsOnCampaignByID = async (id: number, leadId: number) => {
    const loading = loadingSpinner(`Fetching selected campaign emails`).start();
    const response = await SmartLeadApi.get<LeadEmails>(`/campaigns/${id}/leads/${leadId}/message-history?api_key=${ENVS.SMARTLEAD_API_KEY}`);
    const { data } = response;
    loading.stop()
    return data;
}