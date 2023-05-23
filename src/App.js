import logo from './logo.svg';
import './App.css';
import './components/CreditCard.css'

/* ------------------------------- Components ------------------------------- */
import IdCard from './components/IdCard';
import Greeting from './components/Greeting'; 
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';


function App() {
  return (
    <>
    <h2>Iteration 1 | Component: IdCard</h2>
    <div className='id-container'>
      <IdCard 
      lastName='Doe'
      firstName='John'
      gender='male'
      height={178}
      birth={new Date("1992-07-14")}
      picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
      lastName='Delores '
      firstName='Obrien'
      gender='female'
      height={172}
      birth={new Date("1988-05-11")}
      picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
    </div>
    <h2>Iteration 2 | Component: Greetings</h2>
    <Greeting lang="en">Ludwig</Greeting>
    <Greeting lang="fr">François</Greeting>
    <Greeting lang="de">Ludwig</Greeting>
    <Greeting lang="es">Carmen</Greeting>
    <Greeting lang="kr">카르멘</Greeting>
    <h2>Iteration 3 | Component: Random</h2>
    <Random min={1} max={6}/>
    <Random min={1} max={100}/>
    <h2>Iteration 4 | Component: BoxColor</h2>
    <BoxColor r={255} g={0} b={0} />
    <BoxColor r={128} g={255} b={0} />
    <h2>Iteration 5 | Component: CreditCard</h2>
      <section className='card-component'>
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white" 
        />
            
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
            
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white" 
        />
      </section>
    </>
  );
}

export default App;
