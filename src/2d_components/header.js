import Menu from './menu'
function Header(props) {
	return (
		<div>
			<div className='siteHeader'>casey berman</div>
			<Menu menuClicked={(section)=>props.menuClicked(section)}/>
		</div>
	)
}
export default Header