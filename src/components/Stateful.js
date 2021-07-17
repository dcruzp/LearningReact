import react , {Component} from 'react';

class Stateful extends Component{
  constructor(props){
    super(props);
    this.state = {
      hello:'Hello world' 
    }
  }
  render(){
    return (
      <h1>Hola Mundo</h1>
    )
  }
}; 

export default Stateful; 