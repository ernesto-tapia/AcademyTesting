import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
function App() {
  let color=[0,0,0];
  let RGB;
  setInterval(()=>{
    color=[Math.floor(Math.random()*255)+1, Math.floor(Math.random()*255)+1, Math.floor(Math.random()*255)+1]
    RGB=color[0]+','+color[1]+','+color[2];
    const element= 
    <div style={{backgroundColor:'rgba('+RGB+')'}}>
      <p >this was the color in RGB:{RGB}</p>
    </div> ;
    ReactDOM.render(element, document.getElementById('color'));
  },2000);
  return (
    <div className="App">
        <p>
          This is just an example of how react works, verify with F12 to see the console logs
        </p>
        <div>
          <p>the next will be modified by ReactDOM.render(),  it will change every 2 seconds</p>
          <div className='center'>
            <div id='color' className='color'/>
          </div>
        </div>
    </div>
  );
}

export default App;
