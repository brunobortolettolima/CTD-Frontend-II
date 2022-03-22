
var formulario = document.getElementById("formularioDeCadastro");
var inputItem = document.querySelector(".c-lista__item");

var itemSemTratamento;
var ItemSemEspacos;
var itemTratado;

formulario.addEventListener("submit", function (evento) {

    itemSemTratamento = evento.target[0].value;
    ItemSemEspacos = itemSemTratamento.replace(/\s/g, "");
    itemTratado = ItemSemEspacos.replace(/[^a-zA-Z]+/g,"");

    inputItem.innerText = itemTratado;
    evento.preventDefault();

});

