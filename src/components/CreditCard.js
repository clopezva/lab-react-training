import visa from '../assets/images/visa.png';
import masterCard from '../assets/images/master-card.png'
import './CreditCard.css'

function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}){

    // Split the card number into an array of individual digits
    const digits = number.split("")

    // Replace all digits except the last 4 with dots
    const maskedDigits = digits.map((digit, index) => {
        return index < digits.length - 4 ? " • " : digit;
      });

      // Join the masked digits back into a single string
      const maskedCardNumber = maskedDigits.join("")

    const image = (type === "Visa" ? visa : masterCard)


    return (
        <>
        <div className='creditCard' style={{backgroundColor: bgColor, color: color}}>
            <div style={{display: "flex", justifyContent: "flex-end"}}><img className='card-logo' src={image}/></div>
        <div className='card-number'>{maskedCardNumber}</div>
        <div className='card-expiration'>
            <span>Expires 03/21</span>
            <span className='bank'>{bank}</span>
        </div>
        <div>{owner}</div>
        </div>
        
        </>
    )
}

export default CreditCard





 {/* <div style={CardStyle}>
            <div style={{display: "flex", justifyContent: "flex-end"}}><img src={image} style={imgStyle}></img></div>
            <p style={cardNumberStyle}>{maskedCardNumber}</p>
            <p>Expires {expirationMonth}{expirationYear}   {bank}</p>
            <p>{owner}</p>
            
        </div> */}