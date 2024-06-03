import fs from 'fs';
import csv from 'csv-parser';

interface CSVRecord {
  createdAt: string;
  filename: string;
}

/**
 * CSV parser utility function using csv-parser.
 * @param {string} filePath - The path to the CSV file.
 * @returns {Promise<CSVRecord[]>} - A promise that resolves to an array of parsed CSV records.
 */
export const parseCSV = async (filePath: string): Promise<CSVRecord[]> => {
  return new Promise((resolve, reject) => {
    const results: CSVRecord[] = [];

    fs.createReadStream(filePath)
      .pipe(csv({ separator: ';', headers: ['createdAt', 'filename'] }))
      .on('data', (data: CSVRecord) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', (error: Error) => reject(error));
  });
};
