import '/style.css';

function ButtonNumber(n) {
    let $numButtons = '';

    for(let i = 1; i <= n; i++){
        $numButtons += /*html*/ `
        <button class= "num-buttons">
        ${i}
        </button>
        `
    }

    return $numButtons;

}

export default ButtonNumber;
