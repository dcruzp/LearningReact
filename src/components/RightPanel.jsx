import React from 'react';
import '../styles/rightpanel.css'; 

class RightPanel extends React.Component{
  render(){
    return(
      <div className="rightpanel">
        <h2>Some data</h2>
        <ul>
          <li>item 1 </li>
          <li>item 2 </li>
          <li>item 3 </li>
          {/* <li>item 4 </li>
          <li>item 5 </li>
          <li>item 6 </li>
          <li>item 7 </li>
          <li>item 8 </li>
          <li>item 9 </li>
          <li>item 10 </li> */}
        </ul>
      </div>
    ); 
  }
}

export default RightPanel; 