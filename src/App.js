// import logo from './logo.svg';
import './App.css';
import Header  from './components/Header';
// import Game from './components/Game';
// import RightPanel from './components/RightPanel'
// import Game from './components/Game'; 
import Buscaminas from './components/Buscaminas'

function App() {
  return (
    <div className="App">
      <Header /> 
      <div className= "body"> 
        <div></div>
        {/* <Game/> */}
        <Buscaminas/>
        {/* <RightPanel/> */}
      </div>
    </div>
  );
}

export default App;
