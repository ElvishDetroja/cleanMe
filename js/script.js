

// click to top

const goUp = document.querySelector(".go-up");

goUp.addEventListener("click", () => {

    window.scrollTo(0, 0);

})







// testimonial


const testimonialWrapper = document.querySelector(".testimonial-wrapper");

const testimonialDots = Array.from(document.querySelector(".testimonial-dots").children);






function toggleDot() {
    testimonialDots[0].classList.toggle("active");
    testimonialDots[1].classList.toggle("active");
}


function testimonialWrapperBackward() {

    toggleDot();

    let wrapperAuto = setInterval(() => {
        testimonialWrapper.scrollBy(-20, 0);

        if (testimonialWrapper.scrollLeft == 0) {
            clearInterval(wrapperAuto);
        }

    }, 1)
}


function testimonialWrapperForward() {

    toggleDot();

    let wrapperAuto = setInterval(() => {
        testimonialWrapper.scrollBy(20, 0);

        if (Math.ceil(testimonialWrapper.scrollLeft) == (testimonialWrapper.scrollWidth - testimonialWrapper.offsetWidth)) {
            clearInterval(wrapperAuto);
        }

    }, 1)
}





testimonialDots[0].addEventListener("click", () => {

    if (!(testimonialDots[0].classList.contains("active"))) {

        testimonialWrapperBackward();

    }
})


testimonialDots[1].addEventListener("click", () => {

    if (!(testimonialDots[1].classList.contains("active"))) {

        testimonialWrapperForward();

    }
})


let testimonialAuto;

let count = 2;

function testimonialAutoFunc() {


    testimonialAuto = setInterval(() => {

        count++;

        if (count % 2 !== 0) {
            testimonialWrapperForward();
        }

        if (count % 2 == 0) {
            testimonialWrapperBackward();
        }

    }, 2000)

}

testimonialAutoFunc();


let testimonialArray = [testimonialDots[0], testimonialDots[1], testimonialWrapper];

testimonialArray.forEach(element => {
    element.addEventListener("mouseenter", () => {
        clearInterval(testimonialAuto);
    })
    element.addEventListener("mouseleave", () => {
        testimonialAutoFunc();
    })
});












// partner 



const blueWrapper = document.querySelector(".blue-wrapper");

const blueImgs = document.querySelectorAll(".blue-imgs");




blueImgs.forEach((blueImg, index) => {

    let images = Array.from(blueImg.children);

    for (let i in images) {
        let clone = images[i].cloneNode(true);
        clone.classList.add("clone");
        blueImg.appendChild(clone);
    }

})





let autoScroll;

function scrollOne() {

    autoScroll = setInterval(() => {

        blueWrapper.scrollBy(1, 0);

        if (blueWrapper.scrollLeft >= (blueWrapper.scrollWidth / 2)) {
            blueWrapper.scrollTo(0, 0);
        }

    }, 10)

}

scrollOne();



blueWrapper.addEventListener("mouseenter", () => {
    clearInterval(autoScroll);
})
blueWrapper.addEventListener("mouseleave", () => {
    scrollOne();
})













// progress bar




let progressSection = document.querySelector('.progress-section');

let progressBar = document.querySelector(".progress-bar");




function getScrollPercentage() {
    return Math.ceil(((window.pageYOffset) / (document.body.scrollHeight - window.innerHeight)) * 100) + "%"
}


function updateProgressBar() {

    let percentage = getScrollPercentage();
    progressBar.style.width = `${percentage}`;

    requestAnimationFrame(updateProgressBar);

}


updateProgressBar();










// faq


faqOutside = [...document.querySelectorAll(".faq-outside")];


for (let i in faqOutside) {

    let faqInside = faqOutside[i].querySelector(".faq-inside");
    let faqAnswer = faqOutside[i].querySelector(".faq-answer");
    let faqNumber = faqOutside[i].querySelector(".faq-number");


    faqOutside[i].addEventListener("click", () => {

        faqAnswer.style.display = "block";
        faqNumber.style.color = "white";
        faqNumber.style.backgroundColor = "#00549e";
        faqInside.classList.add("faq-active");
    })

    faqOutside[i].addEventListener("mouseleave", () => {

        faqAnswer.style.display = "none";
        faqNumber.style.color = "black";
        faqNumber.style.backgroundColor = "#FFD662";
        faqInside.classList.remove("faq-active");

    })

}













// const navContact = Array.from(document.querySelectorAll(".nav-contact-js"));
// const footerContact =  Array.from(document.querySelectorAll(".footer-contact-js"));


// const navSocial =Array.from(document.querySelectorAll(".nav-social-js"));
// const footerSocial = Array.from(document.querySelectorAll(".footer-social-js"));


// const planPrice = Array.from(document.querySelectorAll(".plan-price-js"));

// const aboutYear = Array.from(document.querySelectorAll(".about-year-js"));

