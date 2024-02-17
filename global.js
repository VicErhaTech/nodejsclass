setTimeout(()=>{
    console.log("welcome to nodejs");
    clearInterval(inter)
}, 5000);

let inter = setInterval(()=>{
    console.log("good day");
}, 2000);


console.log(__dirname)
console.log(__filename)
