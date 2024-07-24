import { confirm } from "@inquirer/prompts";
import { getCampaignTopLevelInformationByID } from "../services/smartlead.service";
import { showTopLevelAnalytics } from "../utils/topLevelAnalyticsMessage";

export const confirmationWithDetails = async (id: number) => {
    const campaignAnalytics = await getCampaignTopLevelInformationByID(id);
    showTopLevelAnalytics(campaignAnalytics)
    const isConfirmed = await confirm({message: 'Continue and download export'});
    return isConfirmed
}