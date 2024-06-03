import { NextResponse } from 'next/server';
import path from 'path';
import { parseCSV } from '../../utils/csvParser';

/**
 * API route to handle fetching and parsing the CSV file.
 * @returns {Promise<NextResponse>} The response containing the parsed CSV data.
 */
export async function GET() {
  const filePath = path.resolve('./src/app/data/items.csv');
  try {
    const records = await parseCSV(filePath);
    return NextResponse.json(records);
  } catch (error) {
    console.error('Failed to parse CSV file:', error);
    return NextResponse.error({ status: 500, body: 'Failed to parse CSV file' });
  }
}
