const os=require('os');
const fs=require('fs');
const stringify=require('json-stringify-safe');

let filename=os.userInfo().username +".txt";
let uInfo=stringify(os.userInfo());
fs.appendFile(filename, uInfo, function (err) {
    if (err) throw err;
    console.log('Saved!');
});

