import DisplayButtons from "../../components/DisplayButtons";
import DisplayEqual from "../../components/DisplayEqual";
import DisplayOperations from "../../components/DisplayOperations";
import DisplayResult from "../../components/DisplayResult";

import "./style.css";

function CalculatorApp(){
    return /*html*/ `
    <div class="calculator-area">
        <div class = "display-result">
            ${DisplayResult()}
        </div>
      <div class="display-container">
            ${DisplayButtons()}
            ${DisplayOperations()}
        </div>
        <div class = "display-equal">
            ${DisplayEqual()}
        </div>
    </div>
    `
}

export default CalculatorApp;