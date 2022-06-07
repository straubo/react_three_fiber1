import React, {useEffect, useState, useRef, forwardRef } from "react"
import Bio from "./bio"
import Work from "./work"
import Contact from "./contact"

const ContentBody = forwardRef((props, ref) => (
    <div
        ref={ref}
        className='siteBody'
    >   
        <div
            className="siteBodyInner"
            style={props.currentObj == 'about' ? {display: 'block'} : {display: 'none'}}
        >
            <Bio/>
        </div>
        <div
            className="siteBodyInner"
            style={props.currentObj == 'work' ? {display: 'block'} : {display: 'none'}}
        >
            <Work 
                caption={props.caption}
                scroll={props.scroll}
            />
        </div>
        {/* <div
            className="siteBodyInner"
            style={props.currentObj == 'contact' ? {display: 'block'} : {display: 'none'}}
        >
            <Contact/>
        </div> */}
    </div>
))
export default ContentBody