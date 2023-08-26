const fs = require('fs');
const { parse } = require('path');
const dataBuffer= fs.readFileSync("data.json");
console.log(dataBuffer)
const data = dataBuffer.toString();
console.log(data)
const parseData=JSON.parse(data);
// console.log(parseData);
parseData.name="deep";
parseData.name="deepsecret";
parseData.age=23;
console.log(parseData)
fs.writeFileSync("data.json",JSON.stringify(parseData))