import React from 'react'
import Header from './header'
import ContentBody from './contentBody'

// class UIWrapper extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             activeSection: null
//         }
//     }

//     menuClicked(section) {
//         this.state.activeSection = section
//         console.log(this.state.activeSection)
//     }

//     render() {
//         return (
//             <div className='uiWrapper'>
//                 {/* <Header menuClicked={(section)=> this.menuClicked(section)}/> */}
//                 <ContentBody selectedSection={this.state.activeSection} />
//             </div>
//         )
//     }
// }

function UIWrapper(props) {

    // menuClicked(section) {
    //     this.state.activeSection = section
    //     console.log(this.state.activeSection)
    // }
        return (
            <div className='uiWrapper'>
                {/* <Header menuClicked={(section)=> this.menuClicked(section)}/> */}
                <ContentBody currentObj={props.currentObj} />
            </div>
        )
    
}

export default UIWrapper