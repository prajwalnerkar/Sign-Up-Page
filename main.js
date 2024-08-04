const swiper = new Swiper(".swiper", {
    speed: 500,
    allowTouchMove: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const gotoSlide = index => swiper.slideTo(index);

const restart = () => {
    const inputs = document.querySelectorAll("input");
    const buttons = document.querySelectorAll("button[type=button]");

    buttons.forEach(button => button.disabled = true);

    inputs.forEach(input => input.value = "");
    gotoSlide(0);
};

const checkValid = event => {
    const input = event.target;
    const nextButton = input.nextElementSibling;
    nextButton.disabled = !input.value.length;
};
