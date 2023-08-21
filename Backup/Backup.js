let path = require("path");
let fs = require("fs");
const events = require("events");
const emitter = new events();

class BackUp {
  getBackUp() {
    // console.log(path.join(__dirname, "..", "data", "manga.json"));
    // console.log(path.join(__dirname, "manga.json"));

    let actualData = fs.readFileSync(
      path.join(__dirname, "..", "data", "manga.json"),
      "utf-8"
    );
    actualData = JSON.parse(actualData);

    let backupData = fs.readFileSync(
      path.join(__dirname, "manga.json"),
      "utf-8"
    );
    backupData = JSON.parse(backupData);

    // console.log(backupData);
    // console.log(actualData);
    // console.log("runninggggg");
    if (JSON.stringify(backupData) != JSON.stringify(actualData)) {
      // back up the data
      fs.writeFileSync(
        path.join(__dirname, "manga.json"),
        JSON.stringify(actualData)
      );

      let date = new Date();
      console.log(
        `Last back up in ${date.getDate()}/${date.getMonth()}/${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} `
      );
    }
  }
}

let backup = new BackUp();
emitter.on("backup", () => {
  backup.getBackUp();
});

setInterval(() => {
  emitter.emit("backup");
}, 2000);

// module.exports = new BackUp();
