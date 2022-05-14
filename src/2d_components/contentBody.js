import React from "react";
import Bio from "./bio"
import Work from "./work"
function ContentBody(props) {
    // let selectedSection = props.selectedSection
    function renderSection(section) {
        console.log('getting sent')
        switch (section) {
            case 'bio':
                return <Bio />
            case 'work':
                return <Work />
            default:
                return <div></div>
        }
        
    }
    return (
        <div className='siteBody'>
            {/* <Bio /> */}
            {/* <Work /> */}
            {renderSection('work')}
        </div>
    )
}
export default ContentBody