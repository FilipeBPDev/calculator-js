import './style.css';

function ButtonNumber(n) {
    let $numButtons = '';

    for(let i = n ; i >= 0; i--){
        $numButtons += /*html*/ `
        <button class= "num-buttons disp-btn" 
        id = ${i} >${i}</button>
        `
    }
    
    $numButtons += /*html*/ `
        <button class="num-buttons del">Del
        </button>
        `
    $numButtons += /*html*/`
        <button class="num-buttons clear">C   
        </button>    
        `;
    


    return $numButtons;
}

export default ButtonNumber;
