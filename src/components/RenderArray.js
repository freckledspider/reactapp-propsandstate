function RenderArray(props) {
    return <>
    {props.data.map((item, index) => {
        return <div>
            <img src={item.img} alt={item.titel} />
            <h2>{item.title}</h2>
            <p>{item.text}</p>
        </div>
    })}
    </>
}

export default RenderArray