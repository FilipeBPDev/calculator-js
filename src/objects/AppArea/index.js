import DisplayButtons from "../../components/DisplayButtons";
import DisplayOperations from "../../components/DisplayOperations";
import "./style.css"
function AreaApp() {
    return /*html*/ `
    <div class="area">
        <div class="display-container">
            ${DisplayButtons()}
            ${DisplayOperations()}
        </div>
    </div>
    `
}

export default AreaApp;