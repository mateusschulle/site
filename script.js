let menuHamburguer = document.querySelector('.cabecalho__menu-hamburguer');
let condicao = true;
const menu = document.querySelector('.cabecalho__menu');
menuHamburguer.addEventListener('click', abreMenu)

function abreMenu() {
    if(condicao) {
        menu.style = 'display: block;'
        condicao = false;
    } else {
        menu.style = 'display: none;'
        condicao = true
    }
}