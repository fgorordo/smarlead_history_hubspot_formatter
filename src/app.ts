import { AppCache } from "./cache/cache";
import { confirmationWithDetails } from "./cli/confirmationWithDetails";
import { loadingSpinner } from "./cli/loading";
import { selectCampaign } from "./cli/selectCampaign";
import {
  getCampaigns,
  getCampaingsLeadsById,
} from "./services/smartlead.service";
import { createExportFile } from "./utils/createExportFile";
import { formatLeadForCSV } from "./utils/formatLeadsForCSV";
import {
  generateExport,
  getAllEmailsFromCampaign,
} from "./utils/generateExport";
import { select } from "@inquirer/prompts";

import fs from "fs";

const campaignSelection = async () => {
  const selectedCampaign = await selectCampaign(
    AppCache.current.getAllCampaigns()
  );
  if (await confirmationWithDetails(selectedCampaign)) {
    await generateExport(selectedCampaign);
  } else {
    mainMenu();
  }
};

// TEMP REMOVE FROM HERE

const generateReport = async (id: number, name: string) => {
  const leads = await getCampaingsLeadsById(id);
  const leadsCSV = formatLeadForCSV(leads);
  const emails = await getAllEmailsFromCampaign(leads, id);

  return {
    name,
    contacts: leadsCSV,
    emails: emails,
  };
};

const generateAllCampaignsReport = async (campaignsMetadata: any) => {
  const loading = loadingSpinner(
    "Creating all files to export, this actions may take several minutes to end"
  ).start();
  const report: any[] = [];

  campaignsMetadata.forEach(async (data: any) => {
    const reportData = await generateReport(data.id, data.name);
    return report.push(reportData);
  });

  loading.stop();
  return fs.writeFileSync("./test.txt", JSON.stringify(report));
};

const exportAll = async () => {
  const capaignsMetadata = AppCache.current
    .getAllCampaigns()
    .map((campaign) => ({ id: campaign.id, name: campaign.name }));
  const report = await generateAllCampaignsReport(capaignsMetadata);
  // throw new Error("Function not implemented yet");
};

const mainMenu = async () => {
  const selectMenu = await select({
    message: "Selecciona una opción para contiuar",
    loop: false,
    choices: [
      {
        name: "Exportar todas las campañas (Está acción puede demorar varios minutos)",
        value: "EXPORT_ALL",
      },
      {
        name: "Exportar una campaña especifica",
        value: "EXPORT_SELECTIVE",
      },
    ],
  });

  return selectMenu;
};

export const app = async () => {
  console.clear();
  AppCache.current.setCampaigns(await getCampaigns());
  const optionSelected = await mainMenu();
  if (optionSelected === "EXPORT_SELECTIVE") {
    await campaignSelection();
  } else if (optionSelected === "EXPORT_ALL") {
    await exportAll();
  } else {
    await mainMenu();
  }
};
