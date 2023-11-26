// utils.ts
import cheerio from "cheerio";
import fs from "fs";
import path from "path";
import { TableData } from "./types";
import { list } from "@vercel/blob";

export const parseHTML = async (url: string): Promise<TableData[]> => {
  const res = await fetch(url)
  const html = await res.text()
  const $ = cheerio.load(html);

  const headers: string[] = [];
  const tableData: TableData[] = [];

  // Extract table headers
  $("table tr:first-child th").each((index, element) => {
    headers.push($(element).text().trim());
  });

  // Extract table rows
  $("table tr:not(:first-child)").each((index, row) => {
    const rowData: any = {}; // Use type assertion
    $(row)
      .find("td")
      .each((i, cell) => {
        const header = headers[i];
        const value = $(cell).text().trim();

        rowData[header] = value
      });
    tableData.push(rowData); // Assert back to TableData
  });

  return tableData;
};