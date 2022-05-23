function LaptopScreen(props) {
    return(
        <div className="annotation"
            onClick={function() {
                console.log('hi')
                // props.laptopChange()
                console.log(props)
            }}>
            welcome to Casey Berman's website <span style={{ fontSize: '4em' }}>🥲</span>
        </div>
    )
}

export default LaptopScreen