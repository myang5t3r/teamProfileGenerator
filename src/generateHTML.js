// This script receives a JSON object with that data create and HTML document and pass, it back to the index.js script.
const Manager = require("../lib/manager")

// Create empty array to store strings for each card of html
const cardArray = [];

// I will have 4 functions one for each card type Manager, Engineer, Intern and one to put everything together

////////////////////        Function For Manager                /////////////////
function createManager(data) {
    // console.log(data);
    // create string of html card
    let str = `
    <div class="card col-sm-12 col-md-3 p-0 m-4" style ='border-radius: 1em;'>
        <div class="card-body p-0 m-0" style="position: relative;border-radius: 1em; ">
        <div class="bg-danger d-flex" style="flex-direction: column; justify-content:center; flex-wrap:wrap; align-content:space-around; border-radius: 1em 1em 0 0; color: white">
            <h5 class="card-title fs-2">${data.name}</h5> 
            <p class="card-text fs-3">Manager</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item fs-5">Email: <a href="mailto:${data.email}">${data.email}</a></li>
            <li class="list-group-item fs-5">Employee ID: ${data.id}</li>
            <li class="list-group-item fs-5" style = "background: none;">Office Number: ${data.officeNumber}</li>
        </ul>
        </div>
    </div> 
    `;
    // console.log(str)
    cardArray.push(str);
}
////////////////////        Function For Engineer                /////////////////
function createEngineer(data) {
    // console.log(data)
    let str = `
    <div class="card col-sm-12 col-md-3 p-0 m-4" style ='border-radius: 1em;'>
        <div class="card-body p-0 m-0" style="position: relative;border-radius: 1em; ">
        <div class="bg-success d-flex" style="flex-direction: column; justify-content:center; flex-wrap:wrap; align-content:space-around; border-radius: 1em 1em 0 0; color: white">
            <h5 class="card-title fs-2">${data.name}</h5> 
            <p class="card-text fs-3">Engineer</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item fs-5">Email: <a href="mailto:${data.email}">${data.email}</a></li>
            <li class="list-group-item fs-5">Employee ID: ${data.id}</li>
            <li class="list-group-item fs-5" style = "background: none;">Github: <a href="https://github.com/myang5t3r" target="_blank">${data.github}</a></li>
        </ul>
        </div>
    </div> 
    `;
    cardArray.push(str);
}
////////////////////        Function For Intern                /////////////////
function createIntern(data) {
    // console.log(data);
    let str = `
    <div class="card col-sm-12 col-md-3 p-0 m-4" style ='border-radius: 1em;'>
        <div class="card-body p-0 m-0" style="position: relative;border-radius: 1em; ">
        <div class="bg-info d-flex" style="flex-direction: column; justify-content:center; flex-wrap:wrap; align-content:space-around; border-radius: 1em 1em 0 0; color: white">
            <h5 class="card-title fs-2">${data.name}</h5> 
            <p class="card-text fs-3">Intern</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item fs-5">Email: <a href="mailto:${data.email}">${data.email}</a></li>
            <li class="list-group-item fs-5">Employee ID: ${data.id}</li>
            <li class="list-group-item fs-5" style = "background: none;">School: ${data.school}</li>
        </ul>
        </div>
    </div> 
    `;
    cardArray.push(str);
}

// The main function
// Create a function to generate markdown for README
function generateHTML(data) {
    // Loop through each element of array and determine the employee type
    // Then send that data to correct function
    data.forEach(Element => {
        if(Element.hasOwnProperty('officeNumber')){
            createManager(Element);
        }
        else if ( Element.hasOwnProperty('github')){
            createEngineer(Element);
        }
        else{
            createIntern(Element);
        }
    });
    // console.log(cardArray)
    // Create array of html sting 
    const Html = [`
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile Generator</title>
            <link rel="stylesheet" href="assets/css/reset.css">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
            <link rel="stylesheet" href="assets/css/styles.css">
        </head>
        <body>
            <header>
                <div class="col-12 p-1 text-center bg-primary p-5">
                    <h1 class=>myTeam Contacts</h1>
                </div>
            </header>
            <section class="container">
                <div class="row p-4 ">
    `,
    `
            </section>
            <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous">
            </script>
        </body>
    </html> 
    `];
    
    // Use spread operator to put cards into completeHtml
    const completeHtml = [Html[0], ...cardArray, Html[1]].join('');
    console.log(completeHtml);


}


//     )}
//     console.log(typeof data[0])
//     console.log(data[0])
//     console.log(data[0].hasOwnProperty('officeNumber'))
//     // console.log(data[0].key)
//     // console.log(data[0].email)
//     //     let htmlObject = `
//     // `
// //     // Return htmlobject so it can be saved
// //     return htmlObject;
//   }
  
module.exports = generateHTML;
  