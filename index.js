const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

function employeeData() {
    inquirer.prompt([
        {   
            type: "input",
            message: "What is the name of this project or team?",
            name: "teamName"
        },
        {  
            type: "input",
            message: "What is the manager's name?",
            name: "managerName"
        },
        {  
            type: "input",
            message: "What is this manager's ID?",
            name: "managerId"
        },
        {   
            type: "input",
            message: "What is this manager's email?",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "What is this manager's office number?",
            name: "officeNumber"
        },
        {
            type: "confirm",
            message: "Would you like to add an Intern?",
            name: "newIntern"
        },
        {
            type: "input",
            message: "What is this intern's name?",
            name: "internName",
            when: (userInput) => userInput.newIntern === true
        },
        {
            type: "input",
            message: "What is this intern's ID?",
            name: "internId",
            when: (userInput) => userInput.newIntern === true
        },
        {
            type: "input",
            message: "What is this intern's email?",
            name: "internEmail",
            when: (userInput) => userInput.newIntern === true
        },
        {
            type: "input",
            message: "What is this intern's school?",
            name: "school",
            when: (userInput) => userInput.newIntern === true
        },
        {
            type: "confirm",
            message: "Would you like to add an engineer?",
            name: "newEngineer"
            
        },
        {
            type: "input",
            message: "What is this engineer's name?",
            name: "engineerName",
            when: (userInput) => userInput.newEngineer === true
        },
        {
            type: "input",
            message: "What is this engineer's ID?",
            name: "engineerId",
            when: (userInput) => userInput.newEngineer === true
        },
        {
            type: "input",
            message: "What is this engineer's email?",
            name: "engineerEmail",
            when: (userInput) => userInput.newEngineer === true
        },
        {
            type: "input",
            message: "What is this engineer's Github account? (ex: LoopySquare)",
            name: "github",
            when: (userInput) => userInput.newEngineer === true
        }])
        .then(data => {
            manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.officeNumber);
            intern = new Intern(data.internName, data.internId, data.internEmail, data.school);
            engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.github);
            
           const html = `
           <!DOCTYPE html>
           <html>
           
           <head>
               <meta charset="UTF-8">
               <meta http-equiv="X-UA-Compatible" content="IE=edge">
               <meta name="viewport" content="width=device-width, initial-scale=1.0">
               <title>${data.teamName}</title>
               <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
               <link rel="stylesheet" href="./assets/css/divider.css">
               <link rel="stylesheet" href="./assets/css/style.css">
           </head>
           
           <body>
           
               <h1 id="teamName">${data.teamName}</h1>
           
               <div class="columns is-centered">
                   <div class="column is-8">
                       <div class="card">
                           <div class="card-image">
                               <figure class="image is-5by4">
                               <img src="./assets/img/michael.jpg" alt="Manager photo">
                               </figure>
                           </div>
                       
                           <div class="card-content">
                               <p class="card-heading title is-size-1">
                                   ${data.managerName}
                               </p>
           
                               <p class="role title is-size-2 divider is-dark">
                                   Manager
                               </p>
                           </div>
           
                           <div class="card-content">
                               <table class="table list is-mobile manager">
                                   <thead>
                                       <tr>
                                           <th>ID</th>
                                           <th>Email</th>
                                           <th>Office</th>
                                       </tr>
                                   </thead>
                                   <tbody>
                                       <tr>
                                           <td>${data.managerId}</td>
                                           <td><a href="${data.managerEmail}">
                                               <p class="has-text-light">${data.managerEmail}</p>
                                           </a></td>
                                           <td>${data.officeNumber}</td>
                                       </tr>
                                   </tbody>
                               </table>
                           </div>
                       </div>
                   </div>
               </div>
           
               <div class="columns is-centered">
                   <div class="column is-4">
                       <div class="card">
                           <div class="card-image">
                               <figure class="image is-5by4">
                               <img src="./assets/img/andy.jpg" alt="Intern photo">
                               </figure>
                           </div>
                           
                           <div class="card-content">
                               <p class="card-heading title is-size-1">
                                   ${data.internName}
                               </p>
           
                               <p class="role title is-size-2 divider is-dark">
                                   Intern
                               </p>
                           </div>
           
                           <div class="card-content">
                               <table class="table list is-mobile">
                                   <thead>
                                       <tr>
                                           <th>ID</th>
                                           <th>Email</th>
                                           <th>School</th>
                                       </tr>
                                   </thead>
                                   <tbody>
                                       <tr>
                                           <td>${data.internId}</td>
                                           <td><a href="${data.internEmail}">
                                               <p class="has-text-light">${data.internEmail}</p>
                                           </a></td>
                                           <td>${data.school}</td>
                                       </tr>
                                   </tbody>
                               </table>
                           </div>
                       </div>
                   </div>
           
                   <div class="column is-4">
                       <div class="card">
                           <div class="card-image">
                               <figure class="image is-5by4">
                               <img src="./assets/img/dwight.jpg" alt="Engineer photo">
                               </figure>
                           </div>
                           
                           <div class="card-content">
                               <p class="card-heading title is-size-1">
                                   ${data.engineerName}
                               </p>
           
                               <p class="role title is-size-2 divider is-dark">
                                   Engineer
                               </p>
                           </div>
                           
                           <div class="card-content">
                               <table class="table list is-mobile">
                                   <thead>
                                       <tr>
                                           <th>ID</th>
                                           <th>Email</th>
                                           <th>Github</th>
                                       </tr>
                                   </thead>
                                   <tbody>
                                       <tr>
                                           <td>${data.engineerId}</td>
                                           <td><a href="${data.engineerEmail}">
                                               <p class="has-text-light">${data.engineerEmail}</p>
                                           </a></td>
                                           <td><a href="https://github.com/{data.github}" target="_blank">
                                               <p class="has-text-light">{data.github}</p>
                                           </a></td>
                                       </tr>
                                   </tbody>
                               </table>
                           </div>
                       </div>
                   </div>
               </div>
           </body>
           
           <footer>
               Team HTML Generator
           </footer>
           </html> 
`;
    fs.writeFile('./dist/index.html', html, function (err) {
        if (err) {
            return console.log(err);
        }
    });
            console.log("Generating index.html inside /dist");
        })
}

employeeData();