// // let num = 10;
// // if (num == 10) {
// //   document.write("lollllllllllllllllllllllllllllllllllllll");
// // }

// // console.log(2 + 445 + 782973901 - 9);

// // let pi = 3.1416;
// // let PI = 3.1416;

// // let country = "bangladesh";
// // let continent = "Asia";
// // let population = 150;

// // console.log(
// //   "country: " +
// //     country +
// //     ". Continent: " +
// //     continent +
// //     "population: " +
// //     population +
// //     "mil"
// // );

// // let isisland = true;
// // let language;
// // console.log(
// //   typeof isisland +
// //     " " +
// //     typeof population +
// //     " " +
// //     typeof country +
// //     " " +
// //     typeof continent
// // );

// const language = "bangla";
// const country = "bangladesh";

// // country = "netherlands";
// let javascriptIsFun = true;

// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);

// const currentTime = 2022;

// const ageSakib = currentTime - 1998;
// const ageRakib = currentTime - 2002;
// console.log("Age of Sakib: " + ageSakib + ". Age of Rakib : " + ageRakib);

// console.log(ageSakib / 7, 5 ** 2);
// let age = Math.sqrt(ageSakib);
// console.log(age);
// console.log(Math.sqrt(ageSakib));

// let x = 10 + 5;
// x += 10;
// console.log(x);

// console.log(ageSakib < ageRakib);
// console.log(ageRakib >= 20);

// console.log(currentTime - 1998 > currentTime - 2002);

//coding challenge

// let markWeight, markheight, johnWeight, johnHeight;

// markWeight = 78;
// markheight = 1.69;

// let markBMI = markWeight / markheight ** 2;
// console.log("Mark BMI : " + markBMI);

// johnWeight = 92;
// johnHeight = 1.25;

// let johnBMI = johnWeight / johnHeight ** 2;
// console.log("John BMI : " + johnBMI);

// if (markBMI > johnBMI) {
//   console.log(`Mark BMI is higher than Johns BMI`);
//   console.log(`Mark BMI ${markBMI} is higher than Johns BMI ${johnBMI}`);
// } else {
//   console.log(`Johns BMI is higher than marks`);
//   console.log(`Johns BMI ${johnBMI} is higher than MArks BMI ${markBMI}`);
// }

// const firstName = "sakib";
// const job = "web developer";
// const birthYear = 1998;
// const currentYear = 2022;

// let mydetail = "I am a " + (currentYear - birthYear) + " years old " + job;

// console.log(mydetail);

// let myNewDetail = `I am ${firstName} a ${currentYear - birthYear} old ${job}`;

// console.log(myNewDetail);

// let sarahAge = 10;
// let isOldEnough = sarahAge >= 18;

// let notOldEnough = 18 - sarahAge;

// if (isOldEnough) {
//   console.log("Sarah is eligible for friving lisence 🚒");
// } else {
//   console.log(
//     `Sarah is too young. she needs to wait ${notOldEnough} years to get a license`
//   );
// }

let goodVision = false;
let hasLicense = true;

if (goodVision && hasLicense) {
  console.log(`sarah can Drive `);
} else {
  console.log("Someone else should drive");
  if (goodVision === true) {
    console.log("Sarah need Driver license");
  } else {
    console.log(" Sarah need glasses");

    if (hasLicense === false) {
      console.log("sarah need license too");
    }
  }
}
