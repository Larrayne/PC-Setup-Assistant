const figlet = require("figlet");
const chalk = require("chalk");
const boxen = require("boxen");

function welcome(){

    console.clear();

    console.log(
        chalk.cyan(
            figlet.textSync("PC Assistant",{
                horizontalLayout:"default"
            })
        )
    );

    console.log(

        boxen(
            chalk.green(
`🚀 Welcome Larrayne!

Choose a workspace and I'll prepare everything for you.`
            ),
            {
                padding:1,
                borderStyle:"round",
                borderColor:"cyan"
            }
        )

    );

}

module.exports = welcome;