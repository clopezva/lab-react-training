function randomFromInterval(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}


function Random({min, max}){
    
    const randomNumber = randomFromInterval(min,max)

    return (
            <h3 className="section-style">{`Random value between ${min} and ${max} = ${randomNumber}`}</h3>
    )
}

export default Random