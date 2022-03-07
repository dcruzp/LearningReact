// import logo from './logo.svg';
import './App.css';
// import Header  from './components/Header';
// import Game from './components/Game';
// import RightPanel from './components/RightPanel'
// import Game from './components/Game'; 
import Buscaminas from './components/Buscaminas'
// import Grafico from './components/Graficos'
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App" id= "outer-container">
      {/* <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} /> */}
      {/* <Header />  */}
      <div className= "body" id= "page-wrap"> 
        <div></div>
        <Buscaminas/>
        {/* <Grafico></Grafico> */}
      </div>
    </div>
  );
}

export default App;
