
import { loadingSpinner } from "../cli/loading";
import { getCampaingsLeadsById } from "../services/smartlead.service";
import { generateEmailReport } from "./getLeadsEmails";

export const generateExport = async (selection: number) => {
    const loading = loadingSpinner(`Creating emails report...`).start();
    const leads = await getCampaingsLeadsById(selection);
    // const leads_emails = leads.map(lead => generateEmailReport(lead.id,selection))
    // const promise = await Promise.all(leads_emails);
    await generateEmailReport(leads[0].id, selection)
    loading.stop();
    return;
};
