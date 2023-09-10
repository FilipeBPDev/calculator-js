
import CalculatorApp from "../CalculatorApp";

import "./style.css"

function AreaApp() {
    const divArea = /*html*/`
    <div class="area">
        ${CalculatorApp()}
    </div>
    
    `

    return divArea;
}

export default AreaApp;