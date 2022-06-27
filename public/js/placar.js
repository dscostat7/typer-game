function inserePlacar() {
    var corpoTable = $(".placar").find("tbody");
    var numPalavras = $("#counter-words").text();
    var usuario = prompt('Informe seu nome:');

    var linha = novaLinha(usuario, numPalavras);
    linha.find(".botaoRemover").click(removeLinha);

    corpoTable.prepend(linha);
}

function novaLinha(usuario, numPalavras) {
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(numPalavras);
    var botaoRemover = $("<td>");
    var link = $("<a>").addClass("botaoRemover").attr("href", "#");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);
    botaoRemover.append(link);
    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(botaoRemover);

    return linha;
}

function removeLinha(event) {
    event.preventDefault();
    $(this).parent().parent().remove();
}
