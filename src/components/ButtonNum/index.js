import './style.css';

function ButtonNumber(n) {
    let $numButtons = '';

    for(let i = n ; i >= 0; i--){
        $numButtons += /*html*/ `
        <button class= "num-buttons" id = ${i} >
            ${i}
        </button>
        `
    }
    
    $numButtons += /*html*/ `
        <button class="num-buttons">
        Del
        </button>
    `
    $numButtons += /*html*/`
        <button class="num-buttons">
        C        
        </button>    
    `;
    


    return $numButtons;
}

export default ButtonNumber;
