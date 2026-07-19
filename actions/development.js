const open = require("../utils/open");
const config = require("../config");

module.exports = () => {

    console.log("\n🚀 Launching Development Workspace...\n");

    const urls = Array.isArray(config.urls) ? config.urls : [];
    const projects = Array.isArray(config.projects) ? config.projects : [];
    const folders = Array.isArray(config.folders) ? config.folders : [];
    const apps = Array.isArray(config.apps) ? config.apps : [];

    urls.forEach(url => {
        open(`start "" "${url}"`, url);
    });

    projects.forEach(project => {
        open(`code "${project}"`, project);
    });

    folders.forEach(folder => {
        open(`explorer "${folder}"`, folder);
    });

    apps.forEach(app => {

        if(app === "wt"){
            open("start wt","Windows Terminal");
        }else{
            open(app,app);
        }

    });

};