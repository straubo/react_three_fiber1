import { useState, useRef } from "react"
import CanvasContainer from "./3d_components/canvasContainer"
import UIWrapper from "./2d_components/uiWrapper"
// import './styles/index.css'

function App() {
    const scroll = useRef(0)
    const overlay = useRef()
    const caption = useRef()
    // null
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
            <CanvasContainer 
                currentObj={currentObj}
                selectObj={selectObj}
                scroll={scroll}
                overlay={overlay}
                caption={caption}
            />
            <UIWrapper 
                currentObj={currentObj}
                scroll={scroll}
                overlay={overlay}
            />
        </>
    )
}

export default App