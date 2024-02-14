import jQuery from 'jquery';

jQuery(document).ready(function () {
    jQuery(".product-images").slick({
      slidesToShow: 1,
      arrows: false,
      asNavFor: ".thumbnails-images"
    });
    jQuery(".thumbnails-images").slick({
      slidesToShow: 4,
      asNavFor: ".product-images",
      focusOnSelect: true
    });
  });