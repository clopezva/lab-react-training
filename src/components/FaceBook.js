// En la variable profiles cargar un array de objetos, pues son los datos que estan contenidos en berlin.json
import { useState } from 'react';
import profiles from '../data/berlin.json';
import './Facebook.css';

export default function FaceBook(){

    const [selectedCountry, setSelectedCountry] = useState('')
    
    let country = profiles.map(profile => profile.country)
    //console.log(country)

    // First, we are creating a new Set by passing an array. 
    // Because Set only allows unique values, all duplicates will be removed.
    // const countries = new Set(country)

    // Now the duplicates are gone, we're going to convert it back to an array by using the spread operator ...
    const countries = [... new Set(country)]
    console.log(countries)

    function handleClick(country){
        setSelectedCountry(country)
    }

    return (
        <>
        {/* Button Element */}
        {countries.map(country => <button onClick={() => handleClick(country)} className='btn-country' style={{backgroundColor: selectedCountry  === country ? "rgb(111, 111, 211)" : 'transparent'}}>{country}</button>)}
        {/* Profile Elements */}
        {profiles.map((profile, index) => {
            return <div className='container' key={index} style={{backgroundColor: selectedCountry  === profile.country ? "rgb(111, 111, 211)" : 'transparent'}}>
                <img src={profile.img} className='profile-img' alt={`Profile of ${profile.firstName}`}></img>
                <ul className='data'>
                    <li className='profile-list'><strong>First Name:</strong> {profile.firstName}</li>
                    <li className='profile-list'><strong>Last Name:</strong> {profile.lastName}</li>
                    <li className='profile-list'><strong>Country:</strong> {profile.country}</li>
                    <li className='profile-list'><strong>Type:</strong> {profile.isStudent ? 'Student' : 'Teacher' }</li>
                </ul>
            </div>
        })}

        </>
    )
}
