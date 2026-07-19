const ora = require("ora");

async function loading(message,time){

    const spinner = ora(message).start();

    await new Promise(resolve=>setTimeout(resolve,time));

    spinner.succeed();

}

module.exports = loading;