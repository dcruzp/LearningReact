import React from 'react' ; 


const HolaMundo = () => {
  const Hello = 'Hola Mundo !';
  const istrue = true; 
  return (
    <div className="HolaMundo">
      <h1>{Hello}</h1>
      <h2>Curso Esencial de React</h2>
      <img src= "https://arepa.s3.amazonaws.com/react.png" alt="React" />
      {
        istrue ? <h4>Esto es verdadero </h4> : <h5>Soy falso </h5>
      }
    </div>
  )
}

export default HolaMundo ; 