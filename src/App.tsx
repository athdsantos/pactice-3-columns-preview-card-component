import './App.css';
import sedansImg from './images/icon-sedans.svg'
import suvsImg from './images/icon-suvs.svg'
import luxuryImg from './images/icon-luxury.svg'

function App() {
  return (
    <div className="App">
      <div className="card card-sedans">
        <img src={sedansImg} alt="Logo Sedans cars" />
        <h1>SEDANS</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem minus, earum voluptatem sit magnam nam non in distinctio amet esse blanditiis atque. Incidunt eius cumque nesciunt saepe quis dicta deserunt.</p>
        <a href='/' className="btnLearnMore">Learn More</a>
      </div>
      <div className="card card-suvs">
        <img src={suvsImg} alt="Logo SUVS cars" />
        <h1>SUVS</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem minus, earum voluptatem sit magnam nam non in distinctio amet esse blanditiis atque. Incidunt eius cumque nesciunt saepe quis dicta deserunt.</p>
        <a href='/' className="btnLearnMore">Learn More</a>
      </div>
      <div className="card card-luxury">
        <img src={luxuryImg} alt="Logo Luxury cars" />
        <h1>LUXURY</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem minus, earum voluptatem sit magnam nam non in distinctio amet esse blanditiis atque. Incidunt eius cumque nesciunt saepe quis dicta deserunt.</p>
        <a href='/' className="btnLearnMore">Learn More</a>
      </div>
    </div>
  );
}

export default App;
