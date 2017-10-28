$(function () {
  'use strict';
  var $caroselList = $('#carosel ul');
  setInterval(changeSlide, 3000);
  console.log('after setInterval()');

  function changeSlide() {
    $caroselList.animate({ marginLeft: -314 }, 500, moveFirstSlide);
    console.log('changeSlide');
  }

  function moveFirstSlide() {
    var firstItem = $caroselList.find('li:first');
    var lastItem  = $caroselList.find('li:last');
    lastItem.after(firstItem);
    $caroselList.css({ marginLeft: 0 });
    console.log('moveFirstSlide');
  }

});
