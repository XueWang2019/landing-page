//Define global variables

const navbar = document.getElementById("navbar__list");
const sectionstags=document.getElementsByTagName('section');


// Build the nav bar link
for(let i=0;i<sectionstags.length;i++){
  const tabs = document.createElement('li');
  const anchor = document.createElement('a');      
  //Create the link between the nav bar and the appropriate section.
  tabs.classList.add(sectionstags[i].getAttribute('id')); 
  anchor.href = `#section${i + 1}`;
  let  tabText = sectionstags[i].getAttribute('data-nav');
  anchor.innerText=tabText;
  tabs.appendChild(anchor);  
  navbar.appendChild(tabs);
}


//helper function - determines whether section is in view and should be highlighted or not
function isSectionActive(){	
  for (const section of sectionstags) {
    const box = section.getBoundingClientRect();
    if (box.top <= 150 && box.bottom >= 150){
      // Apply active state on the current section and the corresponding Nav link.
      const id = section.getAttribute("id");
              document.querySelector(`.${id}`).classList.add("active");              
              section.classList.add("your-active-class"); 
    }
    else{
      // Remove active state from other section and corresponding Nav link.
      const id = section.getAttribute("id");
              document.querySelector(`.${id}`).classList.remove("active");
              section.classList.remove("your-active-class");
        }
      }
  }

//Section Active State:	the section in nav bar will be also highlighted while scrolling through the page.  
document.addEventListener("scroll", function(){
  isSectionActive()
  }) 























/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


