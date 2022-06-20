$(document).ready(function () {
    atualizaFrase();
    inicializaContadores();
    initialTimer();
});

function atualizaFrase() {
    var words = $('.words').text();
    var lenght = words.split(' ').length;
    var number = $("#number");
    number.text(lenght);
}

var timerInitial = $('#timer').text();
var camp = $('#box-writer');

function inicializaContadores() {
    camp.on('input', function () {
        var content = camp.val();
        var countWords = content.split(/\S+/).length - 1;
        var countCaracters = content.length;

        $('#counter-words').text(countWords);
        $('#counter-caracter').text(countCaracters);
    });
}

function initialTimer() {
    var timer = $('#timer').text();

    camp.one('focus', function () {
        var interval = setInterval(function () {
            timer--;
            $('#timer').text(timer);

            if (timer <= 0) {
                camp.attr('disabled', true);
                clearInterval(interval);
            }
        }, 1000);
    });
}

var reset = $("#reset_game");

reset.on('click', reiniciaJogo);

function reiniciaJogo() {
    camp.attr('disabled', false);
    camp.val('');
    $('#counter-words').text('0');
    $('#counter-caracter').text('0');
    $('#timer').text(timerInitial);
    initialTimer();
}