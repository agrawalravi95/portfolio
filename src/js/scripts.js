/* function tabs() {

  //Jquery For accessible Tabs
  // a temp value to cache *what* we're about to show
  var target = null;

  // collect all the tabs
  var tabs = $('.tab').on('click', function () {
    target = $(this.hash).removeAttr('id');

    // if the URL isn't going to change, then hashchange
    // event doesn't fire, so we trigger the update manually
    if (location.hash === this.hash) {
      // but this has to happen after the DOM update has
      // completed, so we wrap it in a setTimeout 0
      setTimeout(update, 0);
    }
  });

  // get an array of the panel ids (from the anchor hash)
  var targets = tabs.map(function () {
    return this.hash;
  }).get();

  // use those ids to get a jQuery collection of panels
  var panels = $(targets.join(',')).each(function () {
    // keep a copy of what the original el.id was
    $(this).data('old-id', this.id);
  });

  function update() {
    if (target) {
      target.attr('id', target.data('old-id'));
      target = null;
    }

    var hash = window.location.hash;
    if (targets.indexOf(hash) !== -1) {
      show(hash);
    }
  }

  function show(id) {
    // if no value was given, let's take the first panel
    if (!id) {
      id = targets[0];
    }
    // remove the selected class from the tabs,
    // and add it back to the one the user selected
    tabs.removeClass('selected').filter(function () {
      return (this.hash === id);
    }).addClass('selected');

    // now hide all the panels, then filter to
    // the one we're interested in, and show it
    panels.hide().filter(id).show();
  }

  $(window).on('hashchange', update);

  // initialise
  if (targets.indexOf(window.location.hash) !== -1) {
    update();
  } else {
    show();
  }
} */



/* JS For Background Image

$(document).ready(function() {
var movementStrength = 25;
var height = movementStrength / $(window).height();
var width = movementStrength / $(window).width();
$("#home").mousemove(function(e){
          var pageX = e.pageX - ($(window).width() / 2);
          var pageY = e.pageY - ($(window).height() / 2);
          var newvalueX = width * pageX * -1 - 25;
          var newvalueY = height * pageY * -1 - 200;
          $('#home').css("background-position", newvalueX+"px     "+newvalueY+"px");
});
}); */

$('#process__toggle').on('click', function() {
  
  $('.process__caption').toggle();
  $('.about__travel').toggleClass('process__details--open');
  var text = $(this).text();
  $(this).text(text == '[ Hide Details ]' ? '[ View Details ]' : '[ Hide Details ]');

});


// Slider 
var arrow = "portfolio__arrow",
    right = "portfolio__arrow--right",
    left = "portfolio__arrow--left",
    close = "portfolio-block--close",
    open = "portfolio-block--open",
    array = $('.portfolio-block'),
    active = array.siblings("." + open);

$('.portfolio-block').on('click', function() {
  if($(this).hasClass(open)) return;

  var block = $(this);
  var index = array.index(block);
  
  if( index == 1 ) {
    $(this).children('.' + arrow).toggleClass(left);
    $(this).children('.' + arrow).toggleClass(right);
  }

  if(array.index(active) === 1 && index === 0) {
    active.children('.' + arrow).addClass(left);
    active.children('.' + arrow).removeClass(right);
  }

  if(array.index(active) === 1 && index === 2) {
    active.children('.' + arrow).addClass(right);
    active.children('.' + arrow).removeClass(left);
  }

  if(array.index(active) === 0 && index === 2) {
    array.eq(1).children('.' + arrow).addClass(right);
    array.eq(1).children('.' + arrow).removeClass(left);
  }

  if(array.index(active) === 2 && index === 0) {
    array.eq(1).children('.' + arrow).addClass(left);
    array.eq(1).children('.' + arrow).removeClass(right);
  }

  active.addClass(close);
  active.removeClass(open);
  active.children('.portfolio__description').removeClass('visible');
  active.children('.portfolio__image').removeClass('visible');
  active.children('.portfolio__back').removeClass('visible');

  $(this).addClass(open);
  $(this).removeClass(close);

  setTimeout(function() {
    block.children('.portfolio__description').addClass('visible');
  }, 200);

  setTimeout(function () {
    block.children('.portfolio__image').addClass('visible');
    block.children('.portfolio__back').addClass('visible');
  }, 400);

  active = array.siblings("." + open);  

});


//Other JS

