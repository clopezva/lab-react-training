
function rgbToHex(r, g, b) {
    return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
  }

function BoxColor({r,g,b}){
   
    //  background-color: rgb(153,102,153);

    const hexColor = rgbToHex(r,g,b)

    const divStyle = {
        backgroundColor: `rgb(${r},${g},${b})`,
        padding: "10px",
        textAlign: "center",
        border: "1px solid #000",
        margin: "10px 0"
    }
    const pStyle = {
        fontWeight: "bold",
        color: "#000"
    }
    

    return (
        <>
            <div style = {divStyle}>
                <p style={pStyle}>{divStyle.backgroundColor}</p>
                <p style={pStyle}>{hexColor}</p>
                
                </div>
        </>
    )
}

export default BoxColor