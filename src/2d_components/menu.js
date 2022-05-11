import NavItem from "./navItem"
function Menu(props) {
    return (
        <div className="navMenu">
            <NavItem section='about' selected={(section) => props.menuClicked(section)} />
            <NavItem section='work' selected={(section) => props.menuClicked(section)} />
            <NavItem section='music' selected={(section) => props.menuClicked(section)} />
            <NavItem section='contact' selected={(section) => props.menuClicked(section)} />
        </div>
    )
}

export default Menu