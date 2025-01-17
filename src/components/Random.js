
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}



function Random({min, max}){
    
    const randomNumber = randomIntFromInterval(min,max)

    return (
            <h3 className="section-style">{`Random value between ${min} and ${max} = ${randomNumber}`}</h3>
    )
}

export default Random