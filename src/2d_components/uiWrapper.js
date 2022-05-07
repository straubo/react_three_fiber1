import Bio from './bio'
import Header from './header'

function UIWrapper() {
    return(
        <div className='uiWrapper'>
            <Header />
            <Bio />
        </div>
    )
}

export default UIWrapper