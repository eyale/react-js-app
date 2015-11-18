$(document).ready(setSliderHeight);
$(window).resize(setSliderHeight);

function setSliderHeight() {
    if ($(window).width() <= 768) {
      var slider = $('.slider'),
        item = $('.slider .item'),
        img = $('.item.active a img');
      slider.height(img.height());
      item.height(img.height());
    };
};
