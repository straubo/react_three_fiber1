import React, { useRef } from 'react'
// import Header from './header'
import ContentBody from './contentBody'

function UIWrapper(props) {
        return (
            <div className='uiWrapper'>
                {/* <Header menuClicked={(section)=> this.menuClicked(section)}/> */}
                <ContentBody 
                    ref={props.overlay}
                    currentObj={props.currentObj}
                    scroll={props.scroll}
                    // overlay={props.overlay}
                    caption={props.caption}
                />
            </div>
        )
    
}

export default UIWrapper