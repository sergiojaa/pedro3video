// es appjsshi mewera.agwera wordshi
import styles from './App.module.css';
function App() {
  const planets = [
    {name : 'Mars', isGasPlanet: false},
    {name : 'earth', isGasPlanet: false},
    {name : 'jupiter', isGasPlanet: true},
    {name : 'venus', isGasPlanet: false},
    {name : 'neptune', isGasPlanet: true},
    {name : 'uranus', isGasPlanet: true},
  ]

  return(
    <div className='App'>
     { planets.map((planet, key) => planet.isGasPlanet &&
     <h1>{planet.name}</h1>
      )}
    </div>
  )
}



export default App;
