import React from 'react'; 
import '../styles/buscaminas.css';


//enviroment global 
var rows = 8 ; 
var columns = 8 ; 
var amountMines = 20;
var discoverCells = 0; 

let dirrow = [-1,-1,-1,0,1,1,1,0]; 
let dircol = [-1,0,1,1,1,0,-1,-1];
let gameover = false ;
let won = false ;  

//Auxiliars functions
function range(start, stop, step) {
  if (typeof stop == 'undefined') {
      // one param defined
      stop = start;
      start = 0;
  }

  if (typeof step == 'undefined') {
      step = 1;
  }

  if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
      return [];
  }

  var result = [];
  for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
      result.push(i);
  }

  return result;
};


function Cell (props)
{
  return (
    <button 
      className="cell" 
      onClick = {props.onClick}
      style = {{
        backgroundColor : props.value.isbloked === true  && props.value.mine === true
      }}>
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

  renderRow(listindex){
    return(
      <div className = "board-row">
        {
          listindex.map(x => this.renderCell(x))
        }
      </div>
    )
  }

  renderAll (listrows){
    return(
      listrows.map(x => this.renderRow(range(x*columns , x*columns + columns)))
    );
  }

  render(){
    return (
      <div>
        {
          this.renderAll(range(rows))
        }
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

  var i =0 ; 
  while(i < amountMines){
    var index = Math.floor(Math.random() *(rows*columns)); 
    if (squares[index].mine === true) continue; 
    squares[index].mine = true; 
    // squares[index].isbloked = false ; 
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
    if (won === true ) return ; 

    const squares = this.state.squares.slice();
    if (squares[i].mine ===true ){
      gameover = true; 
      alert("has pisado una mina");
      // for(let i =0 ; i < rows ; i ++){
      //   for(let j=0 ; j< columns ; j++){
      //     squares[i* columns + j ].isbloked = false;
      //   }
      // } 
      
      // here do something when the game is lost

      gameover = false ; 
      this.setState({
        squares: CreateMines()
      })
      return; 
    } 
    // squares[i].isbloked = false;

    var queue = [{row: Math.floor(i/rows) , col: i % columns}];
    var mask = [i]; 
    squares[i].isbloked = false; 
    discoverCells ++ ;
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
          discoverCells ++ ; 
          queue.push({row:newdirrow , col:newdircol}); 
          mask.push(newposition); 
        }
      }
    }    
    this.setState({
      squares: squares,
    })

    if (discoverCells + amountMines >= squares.length){
      won = true ; 
      alert ("Felicidades, has ganado el juego ")

      // here do something went the game is win 

      this.setState({
        squares: CreateMines() 
      })
    }
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