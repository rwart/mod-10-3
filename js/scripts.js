$(function () {
  'use strict';
  var $caroselList = $('#carosel ul');
  setInterval(changeSlide, 3000);

  function changeSlide() {
    $caroselList.animate({ marginLeft: -314 }, 500, moveFirstSlide);
  }

  function moveFirstSlide() {
    var firstItem = $caroselList.find('li:first');
    var lastItem  = $caroselList.find('li:last');
    lastItem.after(firstItem);
    $caroselList.css({ marginLeft: 0 });
  }

});
