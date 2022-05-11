import Menu from './menu'
function Header() {
    function menuClicked(section) {
        console.log(section)
    }
    return (
        <div>
            <div className='siteHeader'>casey berman</div>
            <Menu menuClicked={(section)=>console.log(section)}/>
        </div>
    )
}
export default Header