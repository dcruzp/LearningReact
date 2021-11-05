// import logo from './logo.svg';
import './App.css';
import Header  from './components/Header';
// import Game from './components/Game';
// import RightPanel from './components/RightPanel'
// import Game from './components/Game'; 
import Buscaminas from './components/Buscaminas'
import Grafico from './components/Graficos'

function App() {
  return (
    <div className="App">
      <Header /> 
      <div className= "body"> 
        <div></div>
        <Buscaminas/>
        <Grafico></Grafico>
      </div>
    </div>
  );
}

export default App;
