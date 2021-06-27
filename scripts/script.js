// console.log('hey!');

// var bottom = document .querySelector('.form-bottom__bottom');
// var first = document .querySelector('.form-bottom__first');
// var second = document .querySelector('.form-bottom__second');


// first.addEventListener ('click', function () {
//  bottom.classList.add('df');
// });

//  second.addEventListener('click', function () {
//  bottom.classList.add('form-bottom__text');
//  bottom.classList.add('df');
//  bottom.classList.remove('form-bottom__bottom');
// });

var hbtn = document .querySelector ('.card__btn');
var blocks = document .querySelector('.card__blocks');

hbtn.addEventListener('click', function () {
 blocks.classList.toggle('db');
 blocks.classList.toggle('dn');
});