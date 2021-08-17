import React from 'react'; 
import '../styles/buscaminas.css';


//enviroment global 
var rows = 9 ; 
var columns = 9 ; 

let dirrow = [-1,-1,-1,0,1,1,1,0]; 
let dircol = [-1,0,1,1,1,0,-1,-1];
let gameover = false ; 

function Cell (props)
{
  return (
    <button className="cell" onClick = {props.onClick}>
      {
        props.value.print()
      }
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

class Casilla{
  mine = false; 
  minesAround = 0;
  isbloked = true; 
  constructor(mine){
    this.mine = mine;
  }

  print = function()  {
    if (this.isbloked === true ) return ' '; 
    else if (this.mine === true ) return 'X';
    else return this.minesAround; 
  }
}



function checkIsInRangePosition (newdirrow , newdircol , rows , columns){
  return newdirrow >= 0 && newdirrow <  rows && newdircol >= 0 && newdircol < columns; 
}

function CreateMines (){

  var squares = new Array(rows * columns).fill(null).map(() => new Casilla(false));

  var total = 40; 
  var i =0 ; 
  while(i < total){
    var index = Math.floor(Math.random() *81); 
    if (squares[index].mine === true) continue; 
    squares[index].mine = true; 
    squares[index].isbloked = false ; 
    i++; 
  }

  for(let i =0 ; i < rows ; i ++ ){
    for(let j =0 ; j < columns; j++){
      let position = i * columns + j ; 
      let amountminesaround = 0 ; 
      for(let r = 0 ; r < dirrow.length; r ++){
        let newdirrow = i + dirrow[r]; 
        let newdircol = j + dircol[r]; 

        if (checkIsInRangePosition(newdirrow , newdircol , rows , columns))
        {
          let newposition = newdirrow * columns + newdircol;
          if (squares[newposition].mine === true ){
            amountminesaround += 1 ;
          }
        }
      }
      squares[position].minesAround = amountminesaround;
    }
  }
  
  return (squares); 
}

class Buscaminas extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      squares : CreateMines()
    }
  }

  handleClick (i){

    if (gameover === true ) return; 

    const squares = this.state.squares.slice();
    if (squares[i].mine ===true ){
      gameover = true; 
      alert("has pisado una mina");
      for(let i =0 ; i < rows ; i ++){
        for(let j=0 ; j< columns ; j++){
          squares[i* columns + j ].isbloked = false;
        }
      } 
      return; 
    } 
    // squares[i].isbloked = false;

    var queue = [{row: Math.floor(i/rows) , col: i % columns}];
    var mask = [i]; 
    squares[i].isbloked = false; 
    while(queue.length !== 0){
      var current = queue.shift(); 
      for(let i=1 ; i<dirrow.length; i+=2){
        let newdirrow = dirrow[i] + current.row; 
        let newdircol = dircol[i] + current.col;
        let newposition = newdirrow * columns + newdircol;
        //let isok =  checkIsInRangePosition(newdirrow , newdircol , rows , columns);
        if (checkIsInRangePosition(newdirrow , newdircol , rows , columns)){
          if (squares[newposition].mine === true || mask.indexOf(newposition) !== -1) continue; 
          squares[newposition].isbloked = false; 
          queue.push({row:newdirrow , col:newdircol}); 
          mask.push(newposition); 
        }
      }
    }
    this.setState({
      squares: squares,
    })
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