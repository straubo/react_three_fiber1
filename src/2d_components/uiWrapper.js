import React, { useRef } from 'react'
import ContentBody from './contentBody'

function UIWrapper(props) {
	return (
		<div className='uiWrapper'>
			<ContentBody 
				ref={props.overlay}
				currentObj={props.currentObj}
				scroll={props.scroll}
				caption={props.caption}
			/>
		</div>
	)
}

export default UIWrapper