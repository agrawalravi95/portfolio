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
var i = 0;

$('#process__toggle').on('click', function() {
  
  $('.process__caption').toggle();
  $('.about__travel').toggleClass('process__details--open');
  $('#portfolio-title').toggleClass('process__details--open');
  var text = $(this).text();
  $(this).text(text == '[ Hide Details ]' ? '[ View Details ]' : '[ Hide Details ]');

})