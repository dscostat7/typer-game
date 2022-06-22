var timerInitial = $('#timer').text();
var camp = $('#box-writer');
var reset = $("#reset_game");

$(function () {
    atualizaFrase();
    inicializaContadores();
    initialTimer();
    reset.on('click', reiniciaJogo);
});

function atualizaFrase() {
    var words = $('.words').text();
    var lenght = words.split(' ').length;
    var number = $("#number");
    number.text(lenght);
}

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
                camp.addClass('disabled_camp');
            }
        }, 1000);
    });
}

function reiniciaJogo() {
    camp.attr('disabled', false);
    camp.val('');
    $('#counter-words').text('0');
    $('#counter-caracter').text('0');
    $('#timer').text(timerInitial);
    initialTimer();
    camp.removeClass('disabled_camp');
}