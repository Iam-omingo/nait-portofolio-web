/*----------------sad face-----------*/
var originalTitle = document.title; // Store the original title
        var isHidden = false; // Flag to track if the page is hidden
        
        document.addEventListener("visibilitychange", function() {
            if (document.visibilityState === 'hidden') {
                // Page is hidden (user left the tab)
                if (!isHidden) {
                    document.title = '😢 Come Back We Miss You! ';
                    document.getElementById('icon').style.display = 'inline'; // Show the icon
                    isHidden = true; // Set the flag to true
                }
            } else {
                // Page is visible again
                if (isHidden) {
                    document.title = originalTitle; // Reset to the original title
                    document.getElementById('icon').style.display = 'none'; // Hide the icon
                    isHidden = false; // Reset the flag to false
                }
            }
        });

/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

  /* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }
