const { exec } = require("child_process");

function open(command, name) {
    exec(command, (error) => {
        if (error) {
            console.log(`❌ ${name}`);
        } else {
            console.log(`✅ ${name}`);
        }
    });
}

module.exports = open;