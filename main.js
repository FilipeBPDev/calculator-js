import AreaApp from './src/objects/AppArea/index.js';


//toda variável que começa com $ ela guarda umelemento da tela - boa prática.
const $root = document.querySelector('#root');
const $htmlAreaApp = AreaApp();
//armazenar div area total
//criar variaveis para armazenar as divs dos display sinais e display igual



//forma segura de inserir HTML num alvo. (insertAdjacentHTML)
$root.insertAdjacentHTML('beforeend', $htmlAreaApp);

//operações responsáveis por exibir no display result o valor do botão clicado
let result = document.querySelector('#display');
const btnNum = document.querySelectorAll('.disp-btn');
const cBtn = document.querySelector('.clear');
const dBtn = document.querySelector('.del');
const eqlBtn = document.querySelector('.equal');
const operators = document.querySelectorAll('.operator-button')

let btnsClicked = '';
let currentIn = '';
let currentOperator = '';

//function exibir valor dos botões
const listenBtn = (event) => {
    const btnValue = event.target.textContent;
    result.value += btnValue
    btnsClicked += btnValue

};




const calculateBtn = (value) => {
    //separa todos os valores que estão divididos por +-*/
    const nums = btnsClicked.split(/[+\-*\/]/);
    const op = btnsClicked.split(/[0-9]+/).filter(Boolean);

    const numbers = nums.map((num) => {
        return Number(num);
    });
    console.log(numbers, op)
    




}


const clearBtn = () => {
    result.value = '';
    displayValue = '';
    currentIn = '';
    currentOperator = '';
};

//function apagar o último valor clicado.
const delBtn = () => {
    result.value = result.value.slice(0, -2); //-2 pois apaga o último valor e o espaço entre eles.
}





//ouvinte dos btns de números
btnNum.forEach((btn) => {
    btn.addEventListener('click', listenBtn)
});
//ouvinte botão clear
cBtn.addEventListener('click', clearBtn);
//ouvinte botão del
dBtn.addEventListener('click', delBtn);

eqlBtn.addEventListener('click', calculateBtn);

