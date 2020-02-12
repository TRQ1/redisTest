'use stric';

import { readFileSync } from 'fs';

const fileContent = readFileSync('test_data.json');
export const jsonfile = JSON.parse(fileContent);
