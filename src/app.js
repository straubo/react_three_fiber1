import { useState } from "react"
import CanvasContents from "./3d_components/canvasContents"
import UIWrapper from "./2d_components/uiWrapper"
import './styles/index.css'

function App() {
    const [currentObj, setCurrentObj] = useState(null)
    
    function setCurrentObject(input) {
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
            <CanvasContents 
                currentObj={currentObj}
                setCurrentObject={setCurrentObject}
            />
        </>
    )
}

export default App