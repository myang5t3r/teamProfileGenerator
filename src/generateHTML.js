// This script receives a JSON object with that data create and HTML document and pass, it back to the index.js script.
const Manager = require("../lib/manager")


// I will have 4 functions one for each card type Manager, Engineer, Intern and one to put everything together

////////////////////        Function For Manager                /////////////////
function createManager(data) {

}
////////////////////        Function For Engineer                /////////////////
function createEngineer(data) {

}
////////////////////        Function For Intern                /////////////////
function createIntern(data) {

}

// The main function

// Create a function to generate markdown for README
function generateHTML(data) {
    // Loop through each element of array and determine the employee type
    // Then send that data to correct function
    console.log(data)
    data.forEach(Element => {
        if(Element.hasOwnProperty('officeNumber')){
            console.log("Manager")
            createManager(Element);
        }
        else if ( Element.hasOwnProperty('github')){
            console.log('Engineer')
            createEngineer(Element);
        }
        else{
            console.log('Intern')
            createIntern(Element);
        }
        })
        
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
  