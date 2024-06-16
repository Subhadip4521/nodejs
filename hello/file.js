const fs = require("fs");

// //sync write
// fs.writeFileSync("./test.txt", "I am a sync test file");

// //async write
// fs.writeFile("./test2.txt", "I am a async test file", (err) => {});

// //sync read
// const result = fs.readFileSync("./test.txt", "utf8");
// console.log(result);

// //async read
// fs.readFile("./test2.txt", "utf8", (err, result) => {
//   if (err) {
//     console.log("Error:", err);
//   } else {
//     console.log(result);
//   }
// });

// fs.appendFileSync("./test.txt",`\n${Date.now()} Hey There\n`);

// fs.cpSync("./test.txt", "./copy.txt");

// fs.unlinkSync("./copy.txt");

console.log(fs.statSync("./test.txt")); 
