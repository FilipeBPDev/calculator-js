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
    //convertendo a string html a cima em um obejo no DOM para ser manipulado
    /*const parser = new DOMParser();
    const doc = parser.parseFromString($htmlCalculator, 'text/html');

    const resDom = doc.querySelector('#display');
    const tedt = resDom.getAttributeNode('value')
    tedt.value = 'oi'*/
    
    
   



    return $htmlCalculator;
}

export default CalculatorApp;