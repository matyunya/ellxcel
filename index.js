import exceljs from "exceljs";
import { default as d } from "~ellx-hub/lib/utils/download.js";
export { toStore } from "~matyunya/cell-to-store";
import { bootstrap } from "~matyunya/store";

export const store = bootstrap({
  wb: createWorkbook(),
});

export function createWorkbook(options = {}) {
  wb = new exceljs.Workbook();
  wb.calcProperties.fullCalcOnLoad = true;
  wb.views = [
    {
      x: 0,
      y: 0,
      width: 10000,
      height: 20000,
      firstSheet: 0,
      activeTab: 1,
      visibility: 'visible',
      ...options,
    }
  ];

  return wb;
}

export function download(buffer, filename = "export.xlsx") {
  const blob = new Blob([buffer], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});

  return d(filename, blob);
}

export { exceljs };

export default store;
