import ButtonNumber from './src/components/ButtonNum/index.js';


//toda variável que começa com $ ela guarda umelemento da tela - boa prática.
const $root = document.querySelector('#root');
const $htmlButton = ButtonNumber(9);


//forma segura de inserir HTML num alvo. (insertAdjacentHTML)
$root.insertAdjacentHTML('beforeend', $htmlButton)