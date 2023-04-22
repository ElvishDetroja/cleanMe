// gallery






const sliderWrapper = document.querySelectorAll(".slider-wrapper");

const sliderWrapperArray = Array.from(sliderWrapper);


const body = document.body;


for (let i in sliderWrapperArray) {


    let slider = sliderWrapperArray[i].querySelector(".slider");

    let items = [...sliderWrapperArray[i].querySelectorAll(".slider-item")];

    let imageContainer = [...sliderWrapperArray[i].querySelectorAll(".img-container")];



    items.forEach(item => {
        let clone = item.cloneNode(true);
        clone.classList.add("clone");
        slider.appendChild(clone);
    })


    sliderWrapperArray[i].scrollTo(sliderWrapperArray[i].scrollWidth, 0);

    let X, X2;
    let O1;



    setInterval(() => {

        let slideUpperLimit = sliderWrapperArray[i].offsetTop + (sliderWrapperArray[i].offsetHeight);

        let slideLowerLimit = sliderWrapperArray[i].offsetTop - window.innerHeight;

        if (slideLowerLimit < window.pageYOffset && window.pageYOffset < slideUpperLimit) {

            let zeroToOne = (window.pageYOffset - slideLowerLimit) / (slideUpperLimit - slideLowerLimit);

            O1 = Math.ceil(100 * zeroToOne);

            for (let j in imageContainer) {
                imageContainer[j].children[0].style.objectPosition = `100% ${O1}%`;
            }


            if (i % 2 == 0) {

                X = Math.floor(sliderWrapperArray[i].offsetWidth * zeroToOne);
                sliderWrapperArray[i].scrollTo(X, 0);
            }
            
            if (i % 2 !== 0) {

                X2 = Math.floor(sliderWrapperArray[i].offsetWidth * (1 - zeroToOne));
                sliderWrapperArray[i].scrollTo(X2, 0);

            }

        }

    }, 10)

}














// single image




const singleImage = document.querySelector(".single-image");

const singleImageFlex = document.querySelector(".single-image-flex");

const singleImgPreview = document.querySelector(".single-img-preview");





for (let i in sliderWrapperArray) {
    sliderWrapperArray[i].addEventListener("click", (event) => {

        let link = event.target.getAttribute("src");


        if (link != null) {
            singleImgPreview.setAttribute("src", link);
            singleImage.style.display = "block";
        }


    })
}


singleImageFlex.addEventListener("click", (event) => {

    if (!(event.target.classList.contains("single-img-preview"))) {
        singleImage.style.display = "none";
    }
})













// mouse pointer

const trailer = document.getElementById("trailer");


window.onmousemove = (event) => {

    const x = event.clientX - trailer.offsetWidth / 2;
    const y = event.clientY - trailer.offsetWidth / 2;

    const keyframes = {
        transform : `translate(${x}px, ${y}px)`
    }
    
    trailer.animate(keyframes, {
        duration: 800,
        fill : "forwards"
    })

}

