var array = document.body.querySelectorAll('.animate');
for (arr of array) {
    arr.classList.remove('animate');
}
$(window).scroll(function() {
    if ($(this).scrollTop() >= array[4].getBoundingClientRect().top) {
        array[4].classList.add('animated', 'fadeInDown');
    }
});