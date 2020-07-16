let brandName = document.getElementById("brand").innerHTML;
let inits;
function init() {
    let initials = [];
    initials[0] = (brandName[0]);
    /* convert title to initials on resize */
    for(let i=0; i<brandName.length; i++){
        if(brandName[i] == " " && brandName[i+1]){
            initials.push(brandName[i+1])
        }
    }
    initials.push(".");
    return initials;
}
  
function reportWindowSize() {
    /* if screen is less than 600px */
    if (matchMedia('only screen and (max-width: 600px)').matches) {
        document.getElementById("brand").innerHTML = inits.join(""); // display initials
    } else {
        document.getElementById("brand").innerHTML = brandName; // display brandName
    }
}
/* initialize on load */
function onLoad() {
    inits = init();
    reportWindowSize();
}
document.onload = onLoad();
window.onload = onLoad();

/* listen for resizes */
window.addEventListener('resize',() => {
    reportWindowSize();
});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon
ie show the dropdown menu */
function dropDown() {
    let nav = document.getElementById("myTopnav");
    reportWindowSize();
    if (nav.className === "topnav") {
        nav.className += " responsive";
        document.getElementById("myContent").className += " mobileMenu";
    } else {
        nav.className = "topnav";
        document.getElementById("myContent").className = "content";
    }
}