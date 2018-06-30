var array = document.body.querySelectorAll('.animate');

var array = Array.prototype.slice.call(array);
array.splice(0, 4);

for (arr of array) {
arr.classList.remove('animate');
arr.classList.add('animated', 'fadeOutLeft')
}

var i = 0;

$(window).scroll(function() {
    if (i != array.length) {
    if ($(this).scrollTop() >= array[i].getBoundingClientRect().top) {
        array[i].classList.remove('fadeOutLeft');
        i++;
        console.log(i);
    }
    }
});