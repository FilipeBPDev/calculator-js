import AreaApp from './src/objects/AppArea/index.js';


//toda variável que começa com $ ela guarda umelemento da tela - boa prática.
const $root = document.querySelector('#root');
const $htmlAreaApp = AreaApp();
//armazenar div area total
//criar variaveis para armazenar as divs dos display sinais e display igual



//forma segura de inserir HTML num alvo. (insertAdjacentHTML)
$root.insertAdjacentHTML('beforeend', $htmlAreaApp);

//operações responsáveis por exibir no display result o valor do botão clicado
const result = document.querySelector('#display');
const btnNum = document.querySelectorAll('.num-buttons');
let clickBtns = '';

const listenBtn = (event) => {
    const btnValue = event.target.textContent;   
    
    result.value += btnValue

};

btnNum.forEach((btn) => {
    btn.addEventListener('click', listenBtn)
});




