import React, {useEffect, useState} from "react"
import Bio from "./bio"
import Work from "./work"
import Contact from "./contact"
class ContentBody extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     selectedSection: 'bio'
        // }
    }
    render() {
        let showedSection
        // function chooseWhichSectionIsShowed() {
            switch(this.props.selectedSection) {
                case  'bio':
                    showedSection = <Bio />
                    break;
                case 'work':
                    showedSection = <Work />
                default:
                    showedSection = <Bio />
            }
        // }
        // chooseWhichSectionIsShowed()
        return (
            <div className='siteBody'>
                {showedSection}
            </div>
        )
    }
}
// function ContentBody(props) {
//     const [showedSection, setShowedSection] = useState('bio')
//     function selectShowedSection() {
//         switch(this.props.selectedSection) {
//             case  'bio':
//                 showedSection = <Bio />
//                 break;
//             case 'work':
//                 showedSection = <Work />
//             default:
//                 showedSection = <Contact />
//         }
//     }
//     return (
//         <div className='siteBody'>
//             {showedSection}
//         </div>
//     )
// }
export default ContentBody