import { select } from "@inquirer/prompts";
import { Campaign, Campaigns } from "../models/campaign.model";

export const selectCampaign = async (data: Campaigns) => {
  const selectedCampaign = await select<number>({
    message: "Select a campaign to export leads and the emails of each lead",
    loop: false,
    pageSize: 10,
    choices: data.map((campaign: Campaign) => {
      return {
        name: campaign.name || 'Unnamed campaign ID: #'+ campaign.id,
        value: campaign.id,
      }
    })
  })

  return selectedCampaign;
};
