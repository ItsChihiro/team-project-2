const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

const photos = ["./assets/img/order_images/order-furniture-one.jpg", "./assets/img/order_images/order-furniture-two.jpg", "./assets/img/order_images/order-furniture-three.jpg", "./assets/img/order_images/order-furniture-three.png", "./assets/img/order_images/order-furniture-four.png", "./assets/img/order_images/order-furniture-five.png", "./assets/img/order_images/order-furniture-six.png", "./assets/img/order_images/order-furniture-seven.png", "./assets/img/order_images/order-furniture-eight.png", "./assets/img/order_images/order-furniture-nine.png", "./assets/img/order_images/order-furniture-ten.png", "./assets/img/order_images/order-furniture-eleven.png"];

let i = 0;

next.addEventListener("click", () => {
    i++;

    if (i > photos.length - 1) {
        i=0;
    }
    document.querySelector(".portfolio__photo-img").src = photos[i];
})

prev.addEventListener("click", () => {
    i--;

    if (i < 0) {
        i= photos.length - 1;
    }
    document.querySelector(".portfolio__photo-img").src = photos[i];
})











// const prev = document.querySelector("#prev");
// const next = document.querySelector("#next");
// const slider = document.querySelector(".portfolio__photo-container");
// const imges = document.querySelectorAll(".portfolio__photo-img");

// console.log(imges);

// let index = 0;
// let width = imges[index].clientWidth;


// next.addEventListener("click", () => {
//     index++;

//     slider.style.transform = `translate(${-index * (width + 20)}px)`;

//     if (index === imges.length - 1) {
//         next.classList.add("disable");
//     }
//     else{
//         prev.classList.remove("disable");
//     }
// });

// prev.addEventListener("click", () => {
//     index--;

//     slider.style.transform = `translate(${-index * (width + 20)}px)`;

//     if (index === 0) {
//         prev.classList.add("disable");
//     }
//     else{
//         next.classList.remove("disable");
//     }
// });

// prev.classList.add("disable");