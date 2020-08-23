const navslide = () => {
    const burger = document.querySelector('.buger');
    const nav = document.querySelector('.navlink');
    const navlinks = document.querySelectorAll('.navlink li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');


        navlinks.forEach((link, index) => {
            const fade = index / 6 + .5;

            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navlinkfade 0.5s ease forwards ${fade}s`;
            }
        });
        burger.classList.toggle('toggle');
    });
}
navslide();