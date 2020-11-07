$(function () {
  var mobMenu = $('.mobile-menu'),
    menuBtn = $('.btn-menu'),
    menuWrap = $('.menu-wrap'),
    main_body = $('body'),
    menuContainer=$('.menu');
  // left: 37, up: 38, right: 39, down: 40,
  // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
  const keys = {
    37: 1,
    38: 1,
    39: 1,
    40: 1
  };  
  let disableScroll = function () {
    let pagePosition = window.scrollY;
    document.body.classList.add('disable-scroll');
    document.body.dataset.position = pagePosition;
    document.body.style.top = -pagePosition + 'px';
  }

  let enableScroll = function () {
    let pagePosition = parseInt(document.body.dataset.position, 10);
    document.body.style.top = 'auto';
    document.body.classList.remove('disable-scroll');
    window.scroll({
      top: pagePosition,
      left: 0
    });
    document.body.removeAttribute('data-position');
  }
  const toggleMenu = function (e) {
    e.preventDefault();
    menuBtn.toggleClass('active');
    menuWrap.toggleClass('active');
    menuWrap.toggleClass('hide');
    mobMenu.toggleClass('active');
    menuContainer.toggleClass('active');
     if (menuBtn.hasClass('active')) {
       disableScroll();
     } else {
       enableScroll();
    };
  };



  mobMenu.on('click', toggleMenu);




});