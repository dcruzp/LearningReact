import React from 'react'; 
import '../styles/buscaminas.css';

function Cell (props)
{
  return (
    <button className="cell" onClick = {props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component{
  renderCell(i){
    return(
      <Cell
        value = {this.props.squares[i]}
        onClick = {() => this.props.onClick(i)}
      />
    );
  }

  render(){
    return (
      <div>
        <div className="board-row">
          {this.renderCell(0)}
          {this.renderCell(1)}
          {this.renderCell(2)}
          {this.renderCell(3)}
          {this.renderCell(4)}
          {this.renderCell(5)}
          {this.renderCell(6)}
          {this.renderCell(7)}
          {this.renderCell(8)}
        </div>
        <div className="board-row">
          {this.renderCell(9)}
          {this.renderCell(10)}
          {this.renderCell(11)}
          {this.renderCell(12)}
          {this.renderCell(13)}
          {this.renderCell(14)}
          {this.renderCell(15)}
          {this.renderCell(16)}
          {this.renderCell(17)}
        </div>
        <div className="board-row">
          {this.renderCell(18)}
          {this.renderCell(19)}
          {this.renderCell(20)}
          {this.renderCell(21)}
          {this.renderCell(22)}
          {this.renderCell(23)}
          {this.renderCell(24)}
          {this.renderCell(25)}
          {this.renderCell(26)}
        </div>
        <div className="board-row">
          {this.renderCell(27)}
          {this.renderCell(28)}
          {this.renderCell(29)}
          {this.renderCell(30)}
          {this.renderCell(31)}
          {this.renderCell(32)}
          {this.renderCell(33)}
          {this.renderCell(34)}
          {this.renderCell(35)}
        </div>
        <div className="board-row">
          {this.renderCell(36)}
          {this.renderCell(37)}
          {this.renderCell(38)}
          {this.renderCell(39)}
          {this.renderCell(40)}
          {this.renderCell(41)}
          {this.renderCell(42)}
          {this.renderCell(43)}
          {this.renderCell(44)}
        </div>
        <div className="board-row">
          {this.renderCell(45)}
          {this.renderCell(46)}
          {this.renderCell(47)}
          {this.renderCell(48)}
          {this.renderCell(49)}
          {this.renderCell(50)}
          {this.renderCell(51)}
          {this.renderCell(52)}
          {this.renderCell(53)}
        </div>
        <div className="board-row">
          {this.renderCell(54)}
          {this.renderCell(55)}
          {this.renderCell(56)}
          {this.renderCell(57)}
          {this.renderCell(58)}
          {this.renderCell(59)}
          {this.renderCell(60)}
          {this.renderCell(61)}
          {this.renderCell(62)}
        </div>
        <div className="board-row">
          {this.renderCell(63)}
          {this.renderCell(64)}
          {this.renderCell(65)}
          {this.renderCell(66)}
          {this.renderCell(67)}
          {this.renderCell(68)}
          {this.renderCell(69)}
          {this.renderCell(70)}
          {this.renderCell(71)}
        </div>
        <div className="board-row">
          {this.renderCell(72)}
          {this.renderCell(73)}
          {this.renderCell(74)}
          {this.renderCell(75)}
          {this.renderCell(76)}
          {this.renderCell(77)}
          {this.renderCell(78)}
          {this.renderCell(79)}
          {this.renderCell(80)}
        </div>
      </div>
    );
  }
}

class Buscaminas extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        squares: Array(54).fill(null),
    }
  }

  handleClick (i){
    console.log(i); 
  }

  render (){
    return <div className="game">
      <div className="game-board">
        <Board
          squares = {this.state.squares}
          onClick = {(i)=>this.handleClick(i)}
        />
      </div>
    </div>
  }
}

export default Buscaminas; 