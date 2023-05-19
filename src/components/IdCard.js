function getFormatedTime(date){

    // Get full Date
    const day = date.toLocaleString('en-us', {  weekday: 'short' });
    const month = date.toLocaleString('en-us', {  month: 'short' });
    const dayOfBirth = date.getDate()
    const yearOfBirth = date.getFullYear()

    return `${day} ${month} ${dayOfBirth} ${yearOfBirth}`
    
}

function IdCard({lastName, firstName, gender, height, birth, picture}){
    //console.log(typeof(birth), birth)
    const fullDate = getFormatedTime(birth)
     
    //Convert height in cm to m
    const heightM = height * 0.01

    /* ----------------------------- Estructure Code ---------------------------- */
    return (
        <>
        <div className="id-card">
            <img src={picture} alt="" />
            <div className="data">
                <p><strong>Fisrt Name:</strong> {firstName}</p>
                <p><strong>Las Name: </strong>{lastName}</p>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>Height:</strong> {`${heightM}m`}</p>
                <p><strong>Birth:</strong> {fullDate}</p>
            </div>
        </div>
        </>
    )
    
}

export default IdCard