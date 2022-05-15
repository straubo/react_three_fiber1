import React from "react";
import Bio from "./bio"
import Work from "./work"
class ContentBody extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     selectedSection: 'bio'
        // }
    }
    render() {
        let showedSection
        switch(this.props.selectedSection) {
            case  'bio':
                showedSection = <Bio />
                break;
            case 'work':
                showedSection = <Work />
            default:
                showedSection = <Bio />
        }
        return (
            <div className='siteBody'>
                {showedSection}
            </div>
        )
    }
}
export default ContentBody