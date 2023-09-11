import DisplayButtons from "../../components/DisplayButtons";
import DisplayEqual from "../../components/DisplayEqual";
import DisplayOperations from "../../components/DisplayOperations";
import DisplayResult from "../../components/DisplayResult";

import "./style.css";

function CalculatorApp() {
    const DisplayBtn = DisplayButtons();
    const DisplayEq = DisplayEqual();
    const DisplayOp = DisplayOperations();
    const DisplayRes = DisplayResult();

    const $htmlCalculator = /*html*/`
    <div id="calc-area" class="calculator-area">
        <div class = "display-result">
            ${DisplayRes}
        </div>
      <div class="display-container">
            ${DisplayBtn}
            ${DisplayOp}
        </div>
        <div class = "display-equal">
            ${DisplayEq}
        </div>
    </div>
    ` 

    return $htmlCalculator;
}

export default CalculatorApp;