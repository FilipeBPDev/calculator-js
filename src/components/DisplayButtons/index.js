import ButtonNumber from "../ButtonNum/index.js"
import "./style.css"


function DisplayButtons() {
    return /*html*/ `
        <div class="display-num">
            ${ButtonNumber(9)}
        </div>
    `;
}

export default DisplayButtons;