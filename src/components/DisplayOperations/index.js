import "./style.css";

function DisplayOperations() {
    let operations = ['/', '*', '-', '+']
    let $displayOp = '';

    for (let i = 0; i < operations.length; i++) {
        $displayOp += /*html*/ `
        <button class="operator-button 
        disp-btn">${operations[i]} </button>
        `
    }

    return /*html*/ `
    <div class="display-operations-container">
        ${$displayOp}
    </div>
    `;
}

export default DisplayOperations;