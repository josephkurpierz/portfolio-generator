const fs = require('fs');
const profileDataArgs = process.argv.slice(2);
const [name, github] = profileDataArgs;
const generatePage = require('./src/page-template.js')


fs.writeFile('./index.html',generatePage(name,github),err =>{
  if (err) throw new Error(err);
  console.log('Portfolio complete! Check out the index.html to see the output!"');
});


//section 9.1
// const printProfileData = profileDataArr => {
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }
//   console.log('===========');

//   profileDataArr.forEach(profileItem => console.log(profileItem));
// }

// printProfileData(profileDataArgs);