import logo from './logo.svg';
import './App.css';
import Navb from './components/navbar.jsx'
import CarCard from './components/carcard.jsx'
import About from './components/about.jsx'

function App() {
  return (
    <div className="App">
      <header>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossorigin="anonymous"
        />
      </header>
      <Navb/>
      <CarCard/>
      <About/>
    </div>
  );
}

export default App;
