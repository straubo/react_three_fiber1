function LaptopScreen(props) {
    return(
        <div className="annotation"
            onClick={props.laptopChange}
        >
            <div
                style={props.activeItem !== 'contact' ? {display: 'block'} : {display: 'none'}}
            >
                Welcome to Casey Berman's website
                <span style={{ fontSize: '4em' }}>🥲</span>
            </div>
            <div className="contactLaptop"
                style={props.activeItem === 'contact' ? {display: 'block'} : {display: 'none'}}
            >
                <div className="contactHeader">
                    hmu
                </div>
                <div>
                    caseybermanprograms@gmail.com
                </div>
            </div>
        </div>
    )
}

export default LaptopScreen