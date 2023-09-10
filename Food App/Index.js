let menuDiv = document.getElementById("menuDiv");
let menuLogo = document.getElementById("menuLogo");
let sideNavBar = document.getElementById("sideNavBar");

menuDiv.onclick = function() {
    // sideNavBar.style.right = "-15rem";
        if(sideNavBar.style.display === "none"){
            sideNavBar.style.display = "block";
            menuLogo.src = "rounded_corners.jpg";
        }
        else{
            sideNavBar.style.display = "none";
            menuLogo.src = "menu.png";
        }
}