import { Lead } from "../models/leads.model";

export const formatLeadForCSV = (leads: Lead[]) => {
    const formattedLaeds = leads.map(lead => {
        return {
            lead_id: lead.id,
            first_name: lead.first_name,
            last_name: lead.last_name,
            email: lead.email,
            location: lead.location,
            company_name: lead.company_name,
            linkedin_url: lead.linkedin_profile
        }
    });

    return formattedLaeds;
}