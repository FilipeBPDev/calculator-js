import './style.css';

function ButtonNumber(n) {
    let $numButtons = '';

    for(let i = n ; i >= 0; i--){
        $numButtons += /*html*/ `
        <button class= "num-buttons">
            ${i}
        </button>
        `
    }
    $numButtons += /*html*/`
        <button class="num-buttons">
        C        
        </button>    
    `
    $numButtons += /*html*/ `
        <button class="num-buttons">
        Del
        </button>
    `
    $numButtons += /*html*/ `
        
    `


    return $numButtons;
}

export default ButtonNumber;
