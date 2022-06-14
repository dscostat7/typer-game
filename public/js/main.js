var words = $('.words').text();
var lenght = words.split(' ').length;
var number = $("#number");

number.text(lenght);

var camp = $('#box-writer');

camp.on('input', function () {
    var content = camp.val();
    var countWords = content.split(/\S+/).length -1;
    var countCaracters = content.length;

    $('#counter-words').text(countWords);
    $('#counter-caracter').text(countCaracters);
});