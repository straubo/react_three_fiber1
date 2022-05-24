function LaptopScreen(props) {
    return(
        <div className="annotation"
            onClick={function() {
                // props.laptopChange()
                props.everything()
                // console.log(props)
            }}>
            welcome to Casey Berman's website <span style={{ fontSize: '4em' }}>🥲</span>
        </div>
    )
}

export default LaptopScreen