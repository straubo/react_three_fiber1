function Menu() {
    return (
        <div className="navMenu">
            <div className="navMenuItem" onClick={(event) => console.log('hi')}
            >about</div>
            <div className="navMenuItem" onClick={(event) => console.log('hi')}
            >work</div>
            <div className="navMenuItem" onClick={(event) => console.log('hi')}
            >music</div>
            <div className="navMenuItem" onClick={(event) => console.log('hi')}
            >contact</div>
        </div>
    )
}

export default Menu