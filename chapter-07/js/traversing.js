$(function(){
  var $h2 = $('h2');
  $('ul').hide();
  $h2.append(' <a>Show</a>');

  $h2.on('click', function() {
    $h2.next()
    .fadeIn(500)
    .children('.hot')
    .addClass('complete')
  $h2.find('a').fadeOut();
  });
});
