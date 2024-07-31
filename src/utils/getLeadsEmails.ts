import { LeadEmails } from "../models/email.model";
import { Lead } from "../models/leads.model";
import { getLeadsEmailsOnCampaignByID } from "../services/smartlead.service"
import { formatEmailResponseData } from "./formatEmailResponseData";

const generateReportForLead = (dataForReport: LeadEmails, leadId: number) => {
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
};