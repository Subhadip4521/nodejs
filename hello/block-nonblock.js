const fs = require("fs");

console.log("1");


//sync read or blocking operations. It is blocking the threads in operations, which is not a good practise.

const result = fs.readFileSync("./test.txt", "utf8");
console.log(result);





//async read or non-blocking operations. It is not blocking the threads in operations, which is a good practise.

// fs.readFile("./test2.txt", "utf8", (err, result) => {
//   if (err) {
//     console.log("Error:", err);
//   } else {
//     console.log(result);
//   }
// });

console.log("2");

