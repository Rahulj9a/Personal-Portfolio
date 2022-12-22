document.addEventListener("DOMContentLoaded", () => {
     //  little hack to detect if the user is on ie 11
     const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
     // get all the links with an ID that starts with 'sectionLink'
     const listOfLinks = document.querySelectorAll("a[href^='#sectionLink");
     // loop over all the links
     listOfLinks.forEach(function (link) {
          // listen for a click
          link.addEventListener("click", () => {
               // toggle highlight on and off when we click a link
               listOfLinks.forEach((link) => {
                    if (link.classList.contains("highlighted")) {
                         link.classList.remove("highlighted");
                    }
               });
               link.classList.add("highlighted");
               // get the element where to scroll
               let ref = link.href.split("#sectionLink");
               ref = "#section" + ref[1];
               // ie 11 does not support smooth scroll, so we will simply scroll
               if (isIE11) {
                    window.scrollTo(0, document.querySelector(ref).offsetTop);
               } else {
                    window.scroll({
                         behavior: "smooth",
                         left: 0,
                         // top gets the distance from the top of the page of our target element
                         top: document.querySelector(ref).offsetTop,
                    });
               }
          });
     });
});
let navBar = document.getElementById("nav-container");
let toggleBtn = document.getElementById("toggleButton");
let slideBtnImg=document.getElementById("slideBtnImg")
toggleBtn.addEventListener("click", showNav);
function showNav() {
     navBar.classList.toggle("translate-x-72");
    slideBtnImg.classList.toggle("rotate-180");
     

     
}

const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = false;
const intervalTime = 5000;
let slideInterval;

next.addEventListener("click", (e) => {
     nextSlide();
});
prev.addEventListener("click", (e) => {
     prevSlide();
});

const nextSlide = () => {
     //Get current class
     const current = document.querySelector(".opacity-100");
     //remove current class
     current.classList.remove("opacity-100");
     current.classList.add("opacity-0");
     //check for next slide:-
     if (current.nextElementSibling) {
          //Add current to next sibling
          current.nextElementSibling.classList.add("opacity-100");
          current.nextElementSibling.classList.remove("opacity-0");
     } else {
          //add current to start
          slides[0].classList.add("opacity-100");
          slides[0].classList.remove("opacity-0");
     }
     setTimeout(() => {
          current.classList.remove("opacity-100");
     });
};
const prevSlide = () => {
     //Get current class
     const current = document.querySelector(".opacity-100");
     //remove current class
     current.classList.remove("opacity-100");
     current.classList.add("opacity-0");
     //check for previous slide:-
     if (current.previousElementSibling) {
          //Add current to previous sibling
          current.previousElementSibling.classList.add("opacity-100");
          current.previousElementSibling.classList.remove("opacity-0");
     } else {
          //add current to last
          slides[slides.length - 1].classList.add("opacity-100");
          slides[slides.length - 1].classList.remove("opacity-0");
     }
     setTimeout(() => {
          current.classList.remove("opacity-100");
     });
};

//Download Resume
function DownloadFile(fileName) {
            //Set the File URL.
            var url = fileName;
 
            //Create XMLHTTP Request.
            var req = new XMLHttpRequest();
            req.open("GET", url, true);
            req.responseType = "blob";
            req.onload = function () {
                //Convert the Byte Data to BLOB object.
                var blob = new Blob([req.response], { type: "application/octetstream" });
 
                //Check the Browser type and download the File.
                var isIE = false || !!document.documentMode;
                if (isIE) {
                    window.navigator.msSaveBlob(blob, fileName);
                } else {
                    var url = window.URL || window.webkitURL;
                    link = url.createObjectURL(blob);
                    var a = document.createElement("a");
                    a.setAttribute("download", "Rahulj9aResume.pdf");
                    a.setAttribute("href", link);
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                }
            };
            req.send();
        };
