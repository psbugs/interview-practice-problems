const XLSX = require("xlsx");

const workbook = XLSX.readFile("input.xlsx");
const sheetName = workbook.SheetNames[2];
const worksheet = workbook.Sheets[sheetName];
console.log('workbook', workbook.Sheets[sheetName], workbook.SheetNames);
return

let data = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: "" });

// Compact each row by filtering out empty cells
const compacted = data.map(row => row.filter(cell => cell !== ""));

const newSheet = XLSX.utils.aoa_to_sheet(compacted);
const newWorkbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(newWorkbook, newSheet, "CompactedData");
XLSX.writeFile(newWorkbook, "output_compacted.xlsx");

console.log("Compacted Excel file created: output_compacted.xlsx");
