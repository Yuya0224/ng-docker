import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

export const environment = {
  production: false,
  staging: true,
  // apiUrl: 'https://laravel-demo-stg.onrender.com/api',
  apiUrl: process.env.API_URL,
};
