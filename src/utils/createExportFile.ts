import * as XLSX from "xlsx";
import * as fs from "fs";
XLSX.set_fs(fs);

export const createExportFile = (title: string, data: any, type: "emails" | "leads") => {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, worksheet, type);
    XLSX.writeFile(workbook, `${title+"-"+type}.csv`, {compression: true});
};