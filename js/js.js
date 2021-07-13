let jsTrigger = document.querySelectorAll('.js-trigger');

jsTrigger.forEach(function(item,i) {
    item.addEventListener('click', function() {
        let tabName = this.getAttribute('data-tab'),
            tabContent = document.querySelector('.js-cont[data-tab="'+tabName+'"]');

        document.querySelectorAll('.js-cont.active').forEach(function (item, i) {
            item.classList.remove('active');
        });
        document.querySelectorAll('.js-trigger.active').forEach(function (item, i) {
            item.classList.remove('active');
        });

        tabContent.classList.add('active');
        this.classList.add('active');
    });

})

let position = 0;
let coffeeWidth = document.querySelector('.product__content').offsetWidth;
let slidesToShow = 2;
let slidesToScroll = 1;
let coffe = document.querySelector('.product__container');
let cofeeProduct = document.querySelectorAll('.product__content');
let movePosition = slidesToScroll * coffeeWidth;
let coffeCount = cofeeProduct.length;

document.querySelector('.btn__prev').onclick = function () {
    position += movePosition;
    position = Math.min(position, 0)
    coffe.style.marginLeft = position + 'px';
}

document.querySelector('.btn__next').onclick = function () {
    position -= movePosition;
    position = Math.max(position, -movePosition * (coffeCount - slidesToScroll)/slidesToShow);
    coffe.style.marginLeft = position + 'px';
}

let comboWidth = document.querySelector('.combo__product').offsetWidth;
let products = document.querySelector('.combo__products');
let product= document.querySelectorAll('.combo__product');
let comboCount = product.length;
let movePos = slidesToScroll * comboWidth;

document.querySelector('.left').onclick = function () {
    position += movePos;
    position = Math.min(position,0);
    products.style.marginLeft = position + 'px';
}

document.querySelector('.right').onclick = function () {
    position -= movePos;
    position = Math.max(position, -movePos * (comboCount - slidesToScroll));
    products.style.marginLeft = position + 'px';
}