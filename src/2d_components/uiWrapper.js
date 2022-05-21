import React from 'react'
import Header from './header'
import ContentBody from './contentBody'

function UIWrapper(props) {
        return (
            <div className='uiWrapper'>
                {/* <Header menuClicked={(section)=> this.menuClicked(section)}/> */}
                <ContentBody currentObj={props.currentObj} />
            </div>
        )
    
}

export default UIWrapper