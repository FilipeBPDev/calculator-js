import ButtonNumber from "../ButtonNum/index.js"
import "./style.css"


function DisplayButtons() {

    const dispNum =  /*html*/ `
        <div id="disp-num" class="display-num">
            ${ButtonNumber(9)}
        </div>
    `;



    return dispNum
};

export default DisplayButtons;