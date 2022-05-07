function Menu() {
    return (
        <div className="navMenu">
            <div className="navMenuItem" onClick={(event) => console.log('about')}
            >about</div>
            <div className="navMenuItem" onClick={(event) => console.log('work')}
            >work</div>
            <div className="navMenuItem" onClick={(event) => console.log('music')}
            >music</div>
            <div className="navMenuItem" onClick={(event) => console.log('contact')}
            >contact</div>
        </div>
    )
}

export default Menu