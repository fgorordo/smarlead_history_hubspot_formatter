import { AppCache } from "./cache/cache";
import { confirmationWithDetails } from "./cli/confirmationWithDetails";
import { selectCampaign } from "./cli/selectCampaign";
import { getCampaigns, getCampaingsLeadsById} from "./services/smartlead.service";
import { createExportFile } from "./utils/createExportFile";
import { generateExport } from "./utils/generateExport";

const campaignSelection = async () => {
    const selectedCampaign = await selectCampaign(AppCache.current.getAllCampaigns())
    if (await confirmationWithDetails(selectedCampaign)) {
        await generateExport(selectedCampaign)
    } else {
        campaignSelection();
    }
}

export const app = async () => {
    console.clear();
    AppCache.current.setCampaigns(await getCampaigns());
    await campaignSelection();
}