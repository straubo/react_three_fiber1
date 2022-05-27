import { useState } from "react"
import CanvasContainer from "./3d_components/canvasContainer"
import UIWrapper from "./2d_components/uiWrapper"
// import './styles/index.css'

function App() {
    // null
    const [currentObj, setCurrentObj] = useState('work')
    
    function selectObj(input) {
        if (currentObj == input) {
            setCurrentObj(null)
        } else {
            setCurrentObj(input)
        }
    }

    return (
        <>
            <CanvasContainer 
                currentObj={currentObj}
                selectObj={selectObj}
            />
            <UIWrapper 
                currentObj={currentObj}
            />
        </>
    )
}

export default App