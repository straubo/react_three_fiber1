import { useState } from "react"
import CanvasContainer from "./3d_components/canvasContainer"
import UIWrapper from "./2d_components/uiWrapper"
import './styles/index.css'

function App() {
    const [currentObj, setCurrentObj] = useState(null)
    
    function selectObj(input) {
        if (currentObj == input) {
            setCurrentObj(null)
        } else {
            setCurrentObj(input)
        }
    }

    return (
        <>
            <UIWrapper 
                currentObj={currentObj}
            />
            <CanvasContainer 
                currentObj={currentObj}
                selectObj={selectObj}
            />
        </>
    )
}

export default App