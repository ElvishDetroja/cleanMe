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