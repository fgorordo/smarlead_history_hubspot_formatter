import { Lead } from "../models/leads.model";
import { getLeadsEmailsOnCampaignByID } from "../services/smartlead.service"
import { formatEmailResponseData } from "./formatEmailResponseData";

export const getLeadsEmails = async (leads: Lead[], campaignID: number) => {
    const promises = leads.map((lead) => getLeadsEmailsOnCampaignByID(campaignID, lead.id))
    const resolve = await Promise.all(promises);
}