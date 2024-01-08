function NavItem(props) {
	const section = props.section
	return (
		<div className="navMenuItem" 
			onClick={(event) => props.selected(section)}
		>{props.section}</div>
	)
}

export default NavItem