var i = 0;
var slideShowImages = new Array();
var searchToggled = false;

// LIST OF IMAGES
slideShowImages[0] = "SlideShow_1.jpg";
slideShowImages[1] = "SlideShow_2.jpg";
slideShowImages[2] = "SlideShow_3.jpg";
slideShowImages[3] = "SlideShow_4.jpg";

function swapImage(n)
{

    i += n;
    if(i > slideShowImages.length -1){
        i = 0;
    } else if (i < 0){
        i = slideShowImages.length -1;
    }
    document.getElementById("slideCounter").innerText = i+1 + "/4";
    document.slide.src = slideShowImages[i];
}

function toggleSearchInput() {
    document.getElementById("searchInput").style.display = searchToggled ? "none" : "block";
    searchToggled = !searchToggled;
}