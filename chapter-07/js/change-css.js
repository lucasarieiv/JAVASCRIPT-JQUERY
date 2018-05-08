$(function() {

  var backgroundColor = $('li').css('background-color');
  $('ul').append('<li>Color was: ' + backgroundColor + '</li>');
  $('li').css({
    'background-color': '#c5a996',
    'border': '1px solid #fff',
    'color': '#000',
    'font-family': 'Georgia',
    'padding-left': '+=75'
  });
});
