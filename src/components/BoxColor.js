function BoxColor({r,g,b}){
    //  background-color: rgb(153,102,153);
    const style = {
        backgroundColor: `rgb(${r},${g},${b})`
    }
    console.log(style)

    return (
        <>
            <p style={style}>Hola, soy un componente</p>

        </>
    )
}

export default BoxColor