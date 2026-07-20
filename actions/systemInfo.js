const si = require("systeminformation");
const chalk = require("chalk").default;

async function systemInfo() {
    console.clear();

    console.log(chalk.cyan.bold("\n===== SYSTEM INFORMATION =====\n"));

    const cpu = await si.cpu();
    const mem = await si.mem();
    const os = await si.osInfo();
    const battery = await si.battery();
    const currentLoad = await si.currentLoad();
    const disk = await si.fsSize();

    console.log(chalk.green("💻 Computer"));
    console.log(`OS: ${os.distro} ${os.release}`);
    console.log(`Architecture: ${os.arch}`);

    console.log("\n🖥 CPU");
    console.log(`${cpu.manufacturer} ${cpu.brand}`);
    console.log(`Cores: ${cpu.cores}`);
    console.log(`Usage: ${currentLoad.currentLoad.toFixed(1)}%`);

    console.log("\n🧠 Memory");
    console.log(`Total: ${(mem.total / 1024 / 1024 / 1024).toFixed(2)} GB`);
    console.log(`Used: ${(mem.used / 1024 / 1024 / 1024).toFixed(2)} GB`);

    console.log("\n💾 Drives");

    disk.forEach(drive => {
        console.log(`${drive.mount}`);
        console.log(
            `${(drive.used / 1024 / 1024 / 1024).toFixed(0)} GB / ${(drive.size / 1024 / 1024 / 1024).toFixed(0)} GB`
        );
    });

    console.log("\n🔋 Battery");

    if (battery.hasbattery) {
        console.log(`${battery.percent}%`);
        console.log(battery.isCharging ? "Charging ⚡" : "Not Charging");
    } else {
        console.log("No battery detected.");
    }
}

module.exports = systemInfo;