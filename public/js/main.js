var words = $('.words').text();
var lenght = words.split(' ').length;
var number = $("#number");

number.text(lenght);

var camp = $('#box-writer');

camp.change(function () {
    var content = camp.val();
    var countWords = content.split(' ').length;
    $('#counter-words').text(countWords);
});