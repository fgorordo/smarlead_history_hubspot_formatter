import { AppCache } from "../cache/cache";
import { getCampaingsLeadsById, getLeadsEmailsOnCampaignByID } from "../services/smartlead.service";
import { createExportFile } from "./createExportFile";
import { formatEmailResponseData } from "./formatEmailResponseData";
import { getLeadsEmails } from "./getLeadsEmails";

export const generateExport = async (selection: number) => {
    const leads = await getCampaingsLeadsById(selection);
    const emails = await getLeadsEmails(leads,selection)
};
