const menuIcon = document.querySelector(".landing header .container i.menu-icon");
console.log(menuIcon);

const wraperMobile = document.querySelector(".landing header .container div.wraper");
console.log(wraperMobile);

const wraperMobile_UL = document.querySelector(".landing header .container div.wraper > div");
console.log(wraperMobile_UL);

menuIcon.addEventListener("click", (e) => {
    wraperMobile_height = wraperMobile.getBoundingClientRect().height;
    wraperMobile_UL_height = wraperMobile_UL.getBoundingClientRect().height;
    console.log(wraperMobile_UL_height);
    if (wraperMobile_height == 0) {
        wraperMobile.style.height = `${wraperMobile_UL_height}px`;
    } else {
        wraperMobile.style.height = 0;
    }
})

const header = document.querySelector(".landing header");
console.log(header);

window.addEventListener("scroll", () => {
    //when we pass the header height we add a class to header to be position fixed
    let headerHeight = header.getBoundingClientRect().height;
    if (window.pageYOffset >= headerHeight) {
        header.classList.add("scroll-header");
    } else {
        header.classList.remove("scroll-header");
    }
    //when we pass landingHeight we add a shadow to the header
    const landingHeight = document.querySelector(".landing").getBoundingClientRect().height;
    if (window.pageYOffset > landingHeight) {
        header.classList.add("header-shadow");
    } else {
        header.classList.remove("header-shadow");
    }
})


/************************javascript counting Number animation ABOUT section**************************/
const allBoxes = document.querySelectorAll(".container .boxes div h3");
console.log(allBoxes);
window.addEventListener("DOMContentLoaded", () => {
    allBoxes.forEach((box) => {
        let endVal = parseInt(box.getAttribute("data-num"));
        let interval = 4000;
        let duration = Math.floor(interval / endVal);
        let count = 0;
        let counter = setInterval(() => {
            box.textContent = count;
            count++;
            if (count == endVal) {
                clearInterval(counter);
            }
        }, duration);
    })
});



/***************************************ARROW UP**************************************/
const arrowUp = document.querySelector(".arrow-up");
console.log(arrowUp);

window.addEventListener("scroll", (e) => {
    // console.log(window.pageYOffset);
    if (window.pageYOffset > 2000) {
        arrowUp.style.display = "block";
    } else {
        arrowUp.style.display = "none";
    }
})


/***************************************set date**************************************/
const yearF = document.querySelector('footer .footer-year');
console.log(yearF);

let yr = new Date().getFullYear();
yearF.textContent = yr;





