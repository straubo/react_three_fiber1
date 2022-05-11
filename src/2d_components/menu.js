function Menu(props) {
    // function menuClicked(section) {
    //     console.log(section)
    // }
    return (
        <div className="navMenu">
            <div className="navMenuItem" onClick={(event) => props.menuClicked('about')}
            >about</div>
            <div className="navMenuItem" onClick={(event) => props.menuClicked('work')}
            >work</div>
            <div className="navMenuItem" onClick={(event) => props.menuClicked('music')}
            >music</div>
            <div className="navMenuItem" onClick={(event) => props.menuClicked('contact')}
            >contact</div>
        </div>
    )
}

export default Menu