"use strict";

jQuery(function ($) {
  var topBtn = $('.pagetop');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // アコーディオン
  $(function () {
    $('.qa__label').click(function () {
      $(this).next('div').slideToggle('open');
      $(this).find(".qa__icon").toggleClass('open');
    });
  });
});

// GSAPに関する記述エリア
gsap.to('.sticky1', {
  x: 60,
  duration: 1
});
gsap.to('.sticky2', {
  x: 100,
  duration: 1.5
});
gsap.to('.sticky3', {
  x: 150,
  duration: 2.5
});