/* mudança de tema */

document.querySelector("#muda-tema").addEventListener("change", function() {
    document.body.classList.toggle("tema-claro");
    document.body.classList.toggle("tema-escuro");
})

/* ícone de menu responsivo */

let navegacao = document.querySelector('.cabecalho__navegacao'); 
    let navIcon = document.querySelector('#js-navbar'); /*ícone*/
    navIcon.addEventListener('click', function() {
        navegacao.classList.toggle('cabecalho__navegacao--ativado');
    });

/* animação título */

var tituloAnimado = document.querySelector(".home__titulo--animado")
var textoTitulo = "Hello, World!"
var index = 0, isAdding = true

function playAnim() {
  setTimeout(function () {
    tituloAnimado.innerText = textoTitulo.slice(0, index)
    if (isAdding) {
      if (index > textoTitulo.length) {
        isAdding = false
        setTimeout( function () {
          playAnim()
        }, 1000)
        return
      } else {
        index++
      }
    } else {
      if (index === 0) {
        isAdding = true
      } else {
        index--
      }
    }
    playAnim()
  }, 120)
}

playAnim()