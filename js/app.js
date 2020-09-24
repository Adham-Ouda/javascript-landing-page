/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// navigation global var
const nav = document.querySelector('#navbar__list');
// sections global var
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const navBar = () => {

	// define a variable to build unordered list
    let navList = '';
    // geting all sections and looping over all off them
    sections.forEach(section => {

    	// get the section id
        const sectionID = section.id;
        // get the section data-nav attribute value
        const sectionDataNav = section.getAttribute("data-nav"); 
        // define a list item for this section
        navList += `<li><a class="menu__link" onclick="clFun(${sectionID})" href="#${sectionID}">${sectionDataNav}</a></li>`;



    });
    // append all items to the navigation
    nav.innerHTML = navList;


};

navBar();


//  attaches a scroll handler to the window.
   window.addEventListener('scroll', function (event) {

// looping over all sections to get the dimensions of every section    	
for(let i=0; i < sections.length; i++) {

   	if (sections[i].offsetTop <= window.scrollY && window.scrollY <= sections[i].offsetTop+sections[i].offsetHeight) {

		sections.forEach(node => {
		    node.classList.remove('your-active-class');
		  });

   		sections[i].classList.add("your-active-class");
		nav.childNodes.forEach(node => {
		    node.classList.remove('your-active-class');
		  });

   		nav.childNodes[i].classList.add("your-active-class");

    }

 }


   });


