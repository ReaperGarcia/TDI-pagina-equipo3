window.onscroll = function () {
    var header = document.querySelector('.header');
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    if (scrollPosition > header.offsetTop) {
        header.classList.add('sticky');
        document.body.classList.add('sticky-header-padding');
    } else {
        header.classList.remove('sticky');
        document.body.classList.remove('sticky-header-padding');
        }
    };