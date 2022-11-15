let botao = document.querySelector(".botao__navegacao");
botao.onclick = abreMenu;
let menu = document.querySelector(".navegacao__lista");
let habilitar = true;

function abreMenu() {

    if (habilitar) {
        menu.style.cssText ='display: block;';
        botao.style.cssText = 'background-color: white'
        habilitar = false;
        
    } else {
        menu.style.cssText ='display: none;';
        botao.style.cssText = 'background-color: rgba(255, 255, 255, 0.411)'
        habilitar = true;
    }
    
}