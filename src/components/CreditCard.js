import visa from '../assets/images/visa.png';
import masterCard from '../assets/images/master-card.png'
import './CreditCard.css'

function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}){

    return (
        <>
        <div className='creditCard' style={{backgroundColor: bgColor, color: color}}>
            <div style={{display: "flex", justifyContent: "flex-end"}}><img className='card-logo' src={(type === "Visa" ? visa : masterCard)}/></div>
        <div className='card-number'>•••• •••• •••• {number.substr(-4)}</div>
        <div className='card-expiration'>
            <span>Expires {`0${expirationMonth}/${expirationYear.toString().substr(2)}`}</span>
            <span className='bank'>{bank}</span>
        </div>
        <div>{owner}</div>
        </div>
        
        </>
    )
}

export default CreditCard


 /* <div style={CardStyle}>
            <div style={{display: "flex", justifyContent: "flex-end"}}><img src={image} style={imgStyle}></img></div>
            <p style={cardNumberStyle}>{maskedCardNumber}</p>
            <p>Expires {expirationMonth}{expirationYear}   {bank}</p>
            <p>{owner}</p>
            
        </div> */

        // function maskedNumbers(cardNumber){
        //     // We need to separe the number in 4 digits.
        
        //     //Determine the length of the input string.
        //     const length = cardNumber.length
        
        //     // Calculate the number of digits to mask, which is the total length minus 4.
        //     const last4Digits = cardNumber.substring(length - 4)
        //     const maskedDigits = "•".repeat(length - 4);
        
        //      // Split the masked digits into groups of 4 digits with a space between them.
        //      const groupedDigits = maskedDigits.match(/.{1,4}/g).join(" ");
        
        //     const cardFormated = groupedDigits + "  " + last4Digits
        
        //     return cardFormated
        // }
        