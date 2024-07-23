#!/usr/bin/env node
import { ENVS } from "./config/envs";

import { SmartLeadApi } from "./api/smartlead";
import { select } from "@inquirer/prompts";

const { data } = await SmartLeadApi.get(`/campaigns?api_key=${ENVS.SMARTLEAD_API_KEY}`);

const selectCampaign: any = await select({
  message: "Select a campaign to export",
  choices: data.map((campaing: any) => {
    if (!campaing.name) {
      return { name: "Unnamed campaign" };
    }
    return {
      name: campaing.name,
    };
  }),
  loop: false,
});

await selectCampaign();

console.log(selectCampaign);
