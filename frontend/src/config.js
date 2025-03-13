// This file is used to store the configuration of the application.
let config ;
const appName = "Chatilium";
const apiUrl = "http://localhost:5001/api/";
const prodApiUrl = "/api/";
const baseUrl = "http://localhost:5001";
if(import.meta.env.MODE === 'development'){
    console.log('Development mode');
    config = {
        appName: appName,
        apiUrl: apiUrl,
        baseUrl: baseUrl,
    };
}
if(import.meta.env.MODE === 'production'){
    console.log('Production mode');
    config = {
        appName: appName,
        apiUrl: prodApiUrl,
        baseUrl: "/",
    };
}


export default config;