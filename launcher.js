const inquirer = require("inquirer").default;

const development = require("./actions/development");

async function start(){

    console.clear();

    console.log("==================================");
    console.log("     🚀 PC SETUP ASSISTANT");
    console.log("==================================");

    const answer = await inquirer.prompt([
        {
            type:"select",
            name:"workspace",
            message:"Choose a workspace:",
            choices:[
                "Development",
                "Study",
                "Entertainment",
                "Open Everything",
                "Exit"
            ]
        }
    ]);

    switch(answer.workspace){

        case "Development":
            development();
            break;

        case "Study":
            console.log("Coming Soon 🚧");
            break;

        case "Entertainment":
            console.log("Coming Soon 🚧");
            break;

        case "Open Everything":
            development();
            break;

        default:
            process.exit();

    }

}

start();