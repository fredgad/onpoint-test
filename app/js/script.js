"use strict";

document.addEventListener('DOMContentLoaded', function () {
  //Variables
  var paginationPoints = document.querySelectorAll('.pagination'),
      parallaxItems = document.querySelectorAll('.parallaxed'),
      upperline = document.getElementById("upperline"),
      smlFir = document.querySelectorAll('.anm__sml'),
      smlSec = document.querySelectorAll('.anm__vsm'),
      rngRock = document.getElementById("rng__rock"),
      big = document.querySelectorAll('.anm__big'),
      mid = document.querySelectorAll('.anm__mid'),
      slider = document.getElementById("slider"),
      head = document.getElementById("header"),
      next = document.getElementById("next"),
      docHeight = document.documentElement.scrollHeight,
      width = header.offsetWidth,
      cursorPos = width * .175,
      mouseCheck = false,
      //Mouse events trigger
  paginationPos = 0,
      scrollPos = 0,
      sliderPos = 0,
      //Variables for swiping
  maxSwipeTime = 1500,
      //Max time for swipe
  swipeRange = 30,
      //Min distance for swiping
  swipeHeight,
      startTime,
      endTime,
      swipeX,
      swipeY; //Events

  window.addEventListener("click", function (e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
  });
  window.addEventListener("wheel", function (e) {
    if (e.preventDefault) {
      e.preventDefault();
    }

    if (e.deltaY < 0) {
      scrollingPage(true); //Scrolling up
    }

    if (e.deltaY > 0) {
      scrollingPage(); //Scrolling down
    }
  });
  next.addEventListener("click", function () {
    scrollingPage();
  }); //Mouse slider

  rngRock.addEventListener('mousedown', function (e) {
    if (e.preventDefault) {
      e.preventDefault();
    }

    mouseCheck = true;
  });
  header.addEventListener('mousemove', function (e) {
    if (e.preventDefault) {
      e.preventDefault();
    }

    if (mouseCheck) {
      sliderOptions(e);
    }
  });
  rngRock.addEventListener('mouseup', function (e) {
    if (e.preventDefault) {
      e.preventDefault();
    }

    mouseCheck = false;
    rngPosition();
  });
  header.addEventListener('mouseup', function (e) {
    if (e.preventDefault) {
      e.preventDefault();
    }

    mouseCheck = false;
    rngPosition();
  });
  header.addEventListener('touchstart', function (e) {
    var touchObj = e.changedTouches[0];
    startTime = new Date().getTime();
    swipeX = touchObj.pageX;
    swipeY = touchObj.pageY;
    swipeHeight = 0;

    if (e.preventDefault) {
      e.preventDefault();
    }
  });
  header.addEventListener('touchmove', function (e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
  });
  header.addEventListener('touchend', function (e) {
    swipeEnd(e);
    rngPosition();

    if (e.preventDefault) {
      e.preventDefault();
    }
  });
  rngRock.addEventListener("touchmove", function (e) {
    sliderOptions(e);
  });
  rngRock.addEventListener("touchend", function (e) {
    rngPosition();
  });
  document.getElementById("rng__line").addEventListener("click", function (e) {
    sliderOptions(e);
    rngPosition();
  });
  document.getElementById("rng__line").addEventListener("touchstart", function (e) {
    sliderOptions(e);
    rngPosition();
  }); //Functions

  (function bubblesAnimate() {
    for (var x = 0; x < 4; x++) {
      big[x].style.animation = "forBig 4s ease infinite ".concat(x, "s");
      mid[x].style.animation = "forMid 4s ease infinite ".concat(x, "s");
      smlFir[x].style.animation = "forSml 4s ease infinite ".concat(x, "s");
      smlSec[x].style.animation = "forSml 4s ease infinite ".concat(x, "s");
    }
  })();

  function scrollingPage(direction) {
    if (direction) {
      if (-scrollPos > docHeight / 3 - 30) {
        scrollPos += docHeight / 3;
        paginationPos--;
      }
    } else {
      if (-scrollPos < docHeight - docHeight / 3 - 30) {
        scrollPos -= docHeight / 3;
        paginationPos++;
      }
    }

    head.style.transform = "translateY(".concat(scrollPos, "px)");
    paginationChange(paginationPos);
    nextButton(paginationPos);
    parallaxImitation(paginationPos);
  }

  function paginationChange(r) {
    for (var x = 0; x < 3; x++) {
      paginationPoints[x].style.background = "#fff";
    }

    paginationPoints[r].style.background = "#f78b1f";
  }

  function nextButton(r) {
    if (r == 0) {
      next.style.display = "flex";
    } else {
      next.style.display = "none";
    }
  }

  function parallaxImitation(r) {
    for (var i = 0; i < parallaxItems.length; i++) {
      parallaxItems[i].style.transform = "translateY(".concat(-r * 20, "rem)");
    }
  }

  function swipeEnd(e) {
    var touchObj = e.changedTouches[0];
    swipeHeight = touchObj.pageY - swipeY;
    endTime = new Date().getTime() - startTime;

    if (endTime <= maxSwipeTime && Math.abs(touchObj.pageX - swipeX) <= 100) {
      if (swipeHeight >= swipeRange) {
        scrollingPage(true);
      } else if (swipeHeight <= -swipeRange) {
        scrollingPage();
      }
    }
  }

  function sliderOptions(e) {
    cursorPos = e.clientX ? e.clientX : e.changedTouches[0].clientX; //Define borders of rng

    var rockPos = cursorPos < width * .175 ? width * .175 : cursorPos > width * .825 ? width * .825 : cursorPos;
    rngRock.style.transition = "0s";
    upperline.style.transition = "0s";
    rngRock.style.left = "calc(".concat(rockPos - rngRock.offsetWidth / 2, "px)");
    upperline.style.width = rockPos - width * .175 + "px";

    if (rockPos < width * .366) {
      sliderPos = 0;
      slider.style.left = "0";
    } else if (rockPos > width * .634) {
      sliderPos = 2;
      slider.style.left = "-200vw";
    } else {
      sliderPos = 1;
      slider.style.left = "-100vw";
    }
  }

  function rngPosition() {
    // Return range button to the original position
    if (sliderPos == 0) {
      rngRock.style.left = width * .175 - rngRock.offsetWidth / 2 + "px";
      upperline.style.width = "0";
    } else if (sliderPos == 1) {
      rngRock.style.left = width / 2 - rngRock.offsetWidth / 2 + "px";
      upperline.style.width = "32.5vw";
    } else {
      rngRock.style.left = width * .825 - rngRock.offsetWidth / 2 + "px";
      upperline.style.width = "65vw";
    }

    rngRock.style.transition = ".65s";
    upperline.style.transition = ".65s";
  }
});