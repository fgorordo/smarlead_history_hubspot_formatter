
import { SmartLeadApi } from "../api/smartlead";
import { loadingSpinner } from "../cli/loading";
import { ENVS } from "../config/envs";
import { Lead } from "../models/leads.model";
import { getCampaingsLeadsById, getLeadsEmailsOnCampaignByID } from "../services/smartlead.service";
import { createExportFile } from "./createExportFile";
import { formatLeadForCSV } from "./formatLeadsForCSV";


const formatData = (data: any, leadId: number) => {
    const {from, to, history} = data;
    const JSONforXSML = history.map((email:any) => {
        return {
            lead_id: leadId,
            email_body: email.email_body,
            email_subject: email.subject,
            email_direction: email.type,
            time: new Date(email.time).toLocaleDateString(),
            seq_number: email.email_seq_number
        }
    });

    return JSONforXSML;
};

const getLeadConversations = async (leadId: number, campaignID: number) => {
    const { data } = await SmartLeadApi.get<any>(`https://server.smartlead.ai/api/v1/campaigns/${campaignID}/leads/${leadId}/message-history?api_key=${ENVS.SMARTLEAD_API_KEY}`)
    const formattedData = formatData(data, leadId);
    return formattedData;
}

export const getAllEmailsFromCampaign = async (leads: Lead[], campaignId: number) => {
    const promises = leads.map(lead => getLeadConversations(lead.id, campaignId));
    const resolvedPromises = await Promise.all(promises.slice(0,60).map(f => f));
    const flattenArray = resolvedPromises.reduce((prev, next) => {
        return prev.concat(next);
      });
    
    return flattenArray;
}



export const generateExport = async (selection: number) => {
    const loading = loadingSpinner(`Creating emails report...`).start();
    const leads = await getCampaingsLeadsById(selection);
    const leadsCSV = formatLeadForCSV(leads);
    const emails = await getAllEmailsFromCampaign(leads, selection)
    createExportFile("Contacts",leadsCSV,"leads");
    createExportFile("Emails",emails,"emails");
    loading.stop();
    return;
};
