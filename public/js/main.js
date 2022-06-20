

function atualizaFrase() {
    var words = $('.words').text();
    var lenght = words.split(' ').length;
    var number = $("#number");
    var timerInitial = $('#timer').text();
    number.text(lenght);
}


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

reset.on('click', function () {
    camp.attr('disabled', false);
    camp.val('');
    $('#counter-words').text('0');
    $('#counter-caracter').text('0');
    $('#timer').text(timerInitial);
    initialTimer();
});