function Button(props){
    console.log("Button " + props.label)
    return <button onClick={props.click} style={{
        border: "none",
        padding: "6px",
        fontSize: "1.2em",
        backgroundColor: "blue",
        color: "white",
        margin: "3px"
    }}>{props.label}</button>
}

export default Button