const fs = require("fs")

// write a file
// fs.writeFile("./docs/blog.txt", "good morning, how was your night", (error, data)=>{
//     if (error) {
//         console.log(error);
//     }
//     else {
//         console.log("Created");
//          }
// }
// );

// readFile
// fs.readFile('./docs/about.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// create directory

// if(!fs.existsSync("./photos")){
//     fs.mkdir("./photos", (err, res) =>{
//         if (err) {
//             console.log(err);
//         }
//         console.log("folder created");
//     });
// }    
//    else {
//         console.log("folder already created");
//         }

        

// delete folder
// if(fs.existsSync("./img")){
//     fs.rmdir("./img", (err, res) =>{
//         if (err) {
//             console.log(err);
//         }
//         console.log("folder deleted");
//     });
// }    
//    else {
//         console.log("folder already deleted");
//         }

        // rename directory
        if(fs.existsSync("./photos")) {
            fs.rename("./photos", "./images", (err, res) =>{
                if (err) {
                    console.log(err);
                }
                console.log("folder renamed");
            });
        }    
           else {
                console.log("folder already renamed");
                }