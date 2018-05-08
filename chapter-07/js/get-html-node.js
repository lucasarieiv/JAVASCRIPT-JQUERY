var $listItemHTML = $('li').html();
console.log($listItemHTML);
$('li').append(' <i>' + $listItemHTML + ' </i>');
