import Header from './header'
import ContentBody from './contentBody'
import Bio from './bio'

function UIWrapper() {
    return(
        <div className='uiWrapper'>
            <Header />
            {/* <Bio /> */}
            <ContentBody />
        </div>
    )
}

export default UIWrapper