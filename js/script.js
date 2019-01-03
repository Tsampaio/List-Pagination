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

const appendPageLinks = () => {
   /*
   1. Determine how many pages are needed for the list by dividing the
   total number of list items by the max number of items per page
   2. Create a div, give it the “pagination” class, and append it to the .page div
   3. Add a ul to the “pagination” div for every page
   4. Add li and a tags with the page number text
   5. Add an event listener to each a tag. When they are clicked
   call the showPage function to display the appropriate page
   6. Loop over pagination links to remove active class from all links
   7. Add the active class to the link that was just clicked. You can identify that
   clicked link using event.target
   */
   const numberPages = Math.ceil(students.length / maxStudents);
   console.log(numberPages);

   let div = document.createElement("div");
   div.className = "pagination";
   document.querySelector(".page").appendChild(div);

   let ul = document.createElement("ul");
   div.appendChild(ul);
   
   for (let i = 0; i < numberPages; i++) {
      
      let li = document.createElement("li");
      let a = document.createElement("a");
      a.addEventListener("click",(e)=> {
         const getAllanchor = e.target.parentNode.parentNode.querySelectorAll("a");
         for (let j=0; j < getAllanchor.length; j++) {
            getAllanchor[j].classList.remove("active");
         }
         e.target.classList.add("active");
         showPage(students, i+1);
      });
      a.href = "#";
      a.textContent = i+1;
     
      li.appendChild(a);
      ul.appendChild(li);
      
      if(i == 0) {
         a.classList.add("active");
      }
   }
   
}

appendPageLinks();

const searchBar = () => {
   let searchContainer = document.createElement("div");
   let searchInput = document.createElement("input");
   let searchButton = document.createElement("button");
   searchContainer.className = "student-search";
   searchContainer.appendChild(searchInput);
   searchInput.placeholder = "Search for students...";
   searchButton.textContent = "Search";
   searchContainer.appendChild(searchButton);


   document.querySelector(".page-header").appendChild(searchContainer);
}

searchBar();



// Remember to delete the comments that came with this file, and replace them with your own code comments.