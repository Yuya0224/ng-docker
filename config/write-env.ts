import * as fs from 'fs';
import { join } from 'path';
import { config } from 'dotenv';

const dotenv = config()?.parsed;

const env = {
  apiUrl: 'http://localhost:3000/api',
  production: false,
};

if (dotenv) {
  env.apiUrl = dotenv.API_URL;
  env.production = dotenv.PRODCTION === 'true';
}

console.log(env.apiUrl);

const contents = 'export const secret = ' + JSON.stringify(env);
fs.writeFileSync(
  join(__dirname, '../src/environments/secret-env.ts'),
  contents
);

console.log(contents);
