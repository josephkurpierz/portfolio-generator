const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template.js')
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));
// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;
//   console.log('Portfolio complete! Check out the index.html to see the output!"');
// });


//section 9.1
// const printProfileData = profileDataArr => {
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }
//   console.log('===========');

//   profileDataArr.forEach(profileItem => console.log(profileItem));
// }

// printProfileData(profileDataArgs);