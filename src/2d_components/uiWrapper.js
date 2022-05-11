import Header from './header'
import ContentBody from './contentBody'
import Bio from './bio'

function UIWrapper() {
    let selectedSection
    function menuClicked(section) {
        selectedSection = section
        console.log(selectedSection + ' is selected now')
    }
    return(
        <div className='uiWrapper'>
            <Header menuClicked={(section)=> menuClicked(section)}/>
            <ContentBody selectedSection={selectedSection} />
        </div>
    )
}

export default UIWrapper