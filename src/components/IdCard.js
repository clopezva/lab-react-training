
function IdCard({lastName, firstName, gender, height, birth, picture}){
    //console.log(typeof(birth), birth)
     
    /* ----------------------------- Javascript code ---------------------------- */
    
    // Get full Date
    const day = birth.toLocaleString('en-us', {  weekday: 'short' });
    const month = birth.toLocaleString('en-us', {  month: 'short' });
    const dayOfBirth = birth.getDate()
    const yearOfBirth = birth.getFullYear()

    const fullDate = `${day} ${month} ${dayOfBirth} ${yearOfBirth}`
    
    console.log(day, month, dayOfBirth,yearOfBirth)

    //Convert heigh in cm to m
    const heightM = height * 0.01

    /* ----------------------------- Estructure code ---------------------------- */
    return (
        <>
        <div id="id-card">
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