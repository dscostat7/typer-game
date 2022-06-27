var timerInitial = $('#timer').text();
var camp = $('#box-writer');
var reset = $("#reset_game");
var words = $('.words').text();

$(function () {
    atualizaFrase();
    inicializaContadores();
    initialTimer();
    verification();
    reset.on('click', reiniciaJogo);
});

function atualizaFrase() {
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
                clearInterval(interval);
                finalizaGame();
            }
        }, 1000);
    });
}

function finalizaGame() {
    camp.attr('disabled', true);
    camp.toggleClass('disabled_camp');
    inserePlacar();
}

function reiniciaJogo() {
    camp.attr('disabled', false);
    camp.val('');
    $('#counter-words').text('0');
    $('#counter-caracter').text('0');
    $('#timer').text(timerInitial);
    initialTimer();
    camp.toggleClass('disabled_camp');
    camp.removeClass('campo_certo');
    camp.removeClass('campo_errado');
}

function verification() {
    camp.on("input", function () {
        var digitado = camp.val();
        var comparation = words.substr(0, digitado.length);

        if (digitado == comparation) {
            camp.addClass("campo_certo");
            camp.removeClass("campo_errado");
            console.log("esta certinho");
        } else {
            camp.addClass("campo_errado");
            camp.removeClass("campo_certo");
            console.log("errado");
        }
    });
}
