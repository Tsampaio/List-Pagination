/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

const students = document.querySelectorAll(".student-item");
const maxStudents = 10;
let pageNumber = 1;

const showPage = (list, page) => {
  
   for (let i = 0; i < students.length; i++ ) {
      if( i >= (page - 1) * maxStudents && i < (page * maxStudents)) {
         list[i].style.display = "";
      } else {
         list[i].style.display = "none";
      }
   }

}
showPage(students, 1);



/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.