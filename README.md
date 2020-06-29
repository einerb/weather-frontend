# Weather App

Web app to show weather conditions by city. version 0.0.1.

## Specifications

Angular 9.1.11  
Node 12.17.0  
Angular CLI 9.1.9  
Npm 6.14.4

## Preliminary steps

First you need to clone the project through this `git clone https://github.com/einerb/weather-frontend.git` command, or download it in .ZIP format.

IMPORTANT: for key or token security considerations, a proxy server must be set up so that the project communicates and does not present CORS errors; that is why the proxy server for DarkSky that we will use `git clone https://github.com/rpearce/DarkSky-proxy` must also be cloned from this repository.
The following steps are considered to run our proxy server:
1. make it the current working directory: $ cd DarkSky-proxy  
2. install dependencies: `npm i` or `yarn`  
3. get an API key: https://darksky.net/dev/  
4. copy .env file: $ cp .env.example .env  
5. add your DarkSky API key to .env: `DARK_SKY_SECRET=abcdefg`  
6. start the server: `node index.js`

When you access the root folder, run `npm install` and wait for it to download the packages needed for it to work properly.
After that you can run the project.

## Run

Execute the `npm start` command to start the project and navigate to `http://localhost:4200/` to view the work.

## Licenses

MIT licence
