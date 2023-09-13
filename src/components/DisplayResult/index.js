import "./style.css";

function DisplayResult() {
    return /*html*/`
    <div class = "display-values">
        <input class = "result" type="text"
        id="display" value="" readonly>
    </div>
    `
}

export default DisplayResult;