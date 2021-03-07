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

// build the nav
function Header() {

    //Declaring Navbar list as a variable to deal with it easy
    var Nav_list = document.getElementById("navbar__list");
    //Counting sections in the page to make item for each in the navbar
    var section_number = document.getElementsByClassName("landing__container").length;
    //Declaring new navbar item
    var New_Nav_Item;

    var counter = 0;

    //Iterating over sections to creat navbar buttom as an item in the list of the navbar
    for (counter = 0; counter < section_number; counter++) {
        New_Nav_Item = document.createElement("li");
        New_Nav_Item.appendChild(document.createTextNode("Section " + (counter + 1)));
        New_Nav_Item.setAttribute("id",counter);
        New_Nav_Item.setAttribute("data-nav", "Section " + counter);
        Nav_list.appendChild(New_Nav_Item);
        New_Nav_Item.style.color = "black";
        New_Nav_Item.style.padding = "15px";
    }

    //Adding event listener to perform the function Scroll to Section on clicking on any item
    Nav_list.addEventListener('click',Scroll_to_Section);
}

//Determining active section and styling it
function Active_Section() {

    var section_number = document.getElementsByClassName("landing__container").length;
    
    var Section_list = [];
    var counter = 1;

    //Iterating over sections and determine the active one
    for (counter = 1; counter <= section_number; counter++) {
        Section_list.push("section" + counter);

        var element = document.getElementById(Section_list[counter - 1]);
        var Nav_Button = document.getElementById(counter-1);
        var Position = element.getBoundingClientRect();
        if(Position.top >= 0 && Position.top <= element.scrollHeight) {
            if(!element.classList.contains("your-active-class")) {
                element.classList.add("your-active-class");
            }
        }
        else {
            element.classList.remove("your-active-class");
        }

        //Styling the navbar button of active section
        if(element.classList.contains("your-active-class") && Position.top <= element.scrollHeight) {
            Nav_Button.classList.add("Selected");
        }
        else {
            Nav_Button.classList.remove("Selected");
        }
    }
}

//Declaring function to scroll to the wanted section
function Scroll_to_Section(element) {
    
    var section_number = document.getElementsByClassName("landing__container").length;
    
    var Section_list = [];
    var counter = 1;

    //Creating a list of the IDs of all sections
    for (counter = 1; counter <= section_number; counter++) {
        Section_list.push("section" + counter);
    }

    //Scrolling to section
    var Current_Section = document.getElementById(Section_list[element.target.id]);
    Current_Section.scrollIntoView();
}

//Adding event listener to call function Active section on scrolling
document.addEventListener('scroll', Active_Section);
