import React, {useEffect, useState, useRef } from "react"
import Bio from "./bio"
import Work from "./work"
import Contact from "./contact"
// class ContentBody extends React.Component {
//     constructor(props) {
//         super(props);
//         // this.state = {
//         //     selectedSection: 'bio'
//         // }
//     }
//     render() {
//         let showedSection
//         // function chooseWhichSectionIsShowed() {
//             switch(this.props.selectedSection) {
//                 case  'bio':
//                     showedSection = <Bio />
//                     break;
//                 case 'work':
//                     showedSection = <Work />
//                 default:
//                     showedSection = <Bio />
//             }
//         // }
//         // chooseWhichSectionIsShowed()
//         return (
//             <div className='siteBody'>
//                 {showedSection}
//             </div>
//         )
//     }
// }


function ContentBody(props) {
    const overlay = useRef()
    const caption = useRef()
    const scroll = useRef(0)
    return (
        <div 
            className='siteBody'
                style={props.currentObj == null ? {display: 'none'} : {display: 'block'}}
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
                    ref={overlay} 
                    caption={caption} 
                    scroll={scroll}
                />
            </div>
            <div
                className="siteBodyInner"
                style={props.currentObj == 'contact' ? {display: 'block'} : {display: 'none'}}
            >
                <Contact/>
            </div>
        </div>
    )
}
export default ContentBody