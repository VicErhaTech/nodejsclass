const {people, age} = require ("./user");
console.log(people);

age.forEach((ag)=> {
    let agm = ag * 2;
    console.log(agm);
})

// let fname = "victor vikky";

// function greeting() {
//     console.log("good morning" + fname);
// };

// greeting();

// let greet = () => {
//     console.log(`weldone ${fname}`);
// };
// greet();