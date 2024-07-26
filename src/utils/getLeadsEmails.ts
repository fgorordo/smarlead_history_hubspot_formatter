import { LeadEmails } from "../models/email.model";
import { Lead } from "../models/leads.model";
import { getLeadsEmailsOnCampaignByID } from "../services/smartlead.service"
import { formatEmailResponseData } from "./formatEmailResponseData";

const generateReportForLead = (dataForReport: LeadEmails, leadId: number) => {
    console.log(dataForReport);
    const {from, history, to} = dataForReport;
    const leadReport = history.map(email => {
        return {
            from,
            to,
            lead_id: leadId,
            subject: email.subject,
            email_body: email.email_body,
            sequence: email.email_seq_number,
            created_at: email.time,
            type: email.type,
        }
    });

    return leadReport;
}

export const generateEmailReport = async (leadId: number, campaignId: number) => {
    const dataForReport = await getLeadsEmailsOnCampaignByID(leadId, campaignId)
    const report = generateReportForLead(dataForReport, leadId);
    return report;
}