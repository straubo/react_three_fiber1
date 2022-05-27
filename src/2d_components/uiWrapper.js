import React, { useRef } from 'react'
import Header from './header'
import ContentBody from './contentBody'

function UIWrapper(props) {
    const scroll = useRef(0)
    const overlay = useRef()
    const caption = useRef()
        return (
            <div className='uiWrapper'>
                {/* <Header menuClicked={(section)=> this.menuClicked(section)}/> */}
                <ContentBody 
                    currentObj={props.currentObj}
                    scroll={scroll}
                    overlay={overlay}
                    caption={caption}
                />
            </div>
        )
    
}

export default UIWrapper