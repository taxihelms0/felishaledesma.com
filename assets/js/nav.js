/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon
ie show the dropdown menu */
function dropDown() {
    let nav = document.getElementById("myTopnav");
    // reportWindowSize();
    if (nav.className === "topnav") {
        nav.className += " responsive";
        document.getElementById("myContent").className += " mobileMenu";
    } else {
        nav.className = "topnav";
        document.getElementById("myContent").className = "content";
    }
}