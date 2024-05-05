let isNavigationOpen = false

function toggleNavigation() {

    let navScreen = document.getElementById("navScreen");
    let navLinks = document.getElementById("nav-links");
    let closeButton = document.getElementById("close-btn");

    if (isNavigationOpen) {
        // close 
        navScreen.style.width = "0"
        navLinks.style.display = "none"
        closeButton.style.display = "none"
        
        isNavigationOpen = false
        console.log("close")

    } else {
        // open
        navScreen.style.width = "100vw"
        navLinks.style.display = "flex"
        closeButton.style.display = "block"

        isNavigationOpen = true
        console.log("open")
    }
    
} // openNavigation()