import ButtonNumber from './src/components/ButtonNum/index.js';
import DisplayButtons from './src/components/DisplayButtons/index.js';
import AreaApp from './src/objects/AppArea/index.js';


//toda variável que começa com $ ela guarda umelemento da tela - boa prática.
const $root = document.querySelector('#root');
const $htmlAreaApp = AreaApp();
//armazenar div area total
//criar variaveis para armazenar as divs dos display sinais e display igual



//forma segura de inserir HTML num alvo. (insertAdjacentHTML)
$root.insertAdjacentHTML('beforeend', $htmlAreaApp);