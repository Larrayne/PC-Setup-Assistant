const cliProgress = require("cli-progress");

async function progress(){

    const bar = new cliProgress.SingleBar({});

    bar.start(100,0);

    for(let i=0;i<=100;i++){

        await new Promise(resolve=>setTimeout(resolve,20));

        bar.update(i);

    }

    bar.stop();

}

module.exports = progress;