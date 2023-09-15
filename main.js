import AreaApp from './src/objects/AppArea/index.js';


//toda variável que começa com $ ela guarda umelemento da tela - boa prática.
const $root = document.querySelector('#root');
const $htmlAreaApp = AreaApp();

//forma segura de inserir HTML num alvo. (insertAdjacentHTML)
$root.insertAdjacentHTML('beforeend', $htmlAreaApp);

//operações responsáveis por exibir no display result o valor do botão clicado
const btnNum = document.querySelectorAll('.disp-btn');
const cBtn = document.querySelector('.clear');
const dBtn = document.querySelector('.del');
const eqlBtn = document.querySelector('.equal');
let result = document.querySelector('#display');
let btnsClicked = '';

//function exibir valor dos botões
const listenBtn = (event) => {
    const btnValue = event.target.textContent;
    result.value += btnValue
    btnsClicked += btnValue
};

const calculateBtn = () => {
    // Separa todos os valores que estão divididos por +-*/
    const nums = btnsClicked.split(/[+\-*\/]/);
    const operators = btnsClicked.split(/[0-9.]+/).filter(Boolean);
    const numbers = nums.map((num) => {
        return Number(num);
    });

    // separa os termos de adição/subtração
    let addSubTerms = [];
    let currentTerm = numbers[0];

    for (let i = 0; i < operators.length; i++) {
        const op = operators[i];
        const nextNum = numbers[i + 1];
        //verifica se é o operador atual é de soma/subtração
        if (op === '+' || op === '-') {
            addSubTerms.push(currentTerm);
            currentTerm = nextNum;
        } else if (op === '*' || op === '/') {
            //executa multiplicação e divisão no termo atual
            if (op === '*') {
                currentTerm *= nextNum;
            } else if (op === '/') {
                if (nextNum === 0) {
                    result.value = '[ERROR] Não é possível efetuar divisão por 0';
                    return;
                }
                currentTerm /= nextNum;
            }
        }
    }
    addSubTerms.push(currentTerm);
    
    //executa operações de adição/subtração com reduce - reduz o array a um único elemento
    let resultValue = addSubTerms.reduce((acc, term, index) => {
        const op = operators[index]; //seleciona o operador correto
        if (op === '-') {
            acc -= term
            return acc ; //subtração
        } else if (op === '+') {
            acc += term
            return acc; //adição
        } else {
            // Não há operador anterior, verifique se há um termo atual
            if (term !== undefined) {
                return acc + term;
            } else {
                return acc; //não há termo atual, apenas retorne o acumulador
            }
        }
    }, 0);
    result.value = resultValue.toString();
}

const clearBtn = () => {
    result.value = '';
    btnsClicked = '';
};

//function apagar o último valor clicado.
const delBtn = () => {
    result.value = result.value.slice(0, -1); //-2 pois apaga o último valor e o espaço entre eles.
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

