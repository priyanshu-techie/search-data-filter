import './App.css';
import JSON from './demo.json'
import { useState } from 'react';
function App() {

  const [curr,setFilter]=useState("");
  


  return (
    <div className="App">
      <div className='container'>
        <input className='inp' onChange={(event)=>setFilter( event.target.value)} placeholder="Search....." />

        {JSON.filter((val)=>{
          if(curr=="")
          return val;
          else if(val.first_name.toLowerCase().includes(curr.toLowerCase()))
            return val;
        })
        .map
        (element => 
        <div>
          <p>{element.first_name}</p>
          </div>
          )}

      </div>
    </div>
  );
}

export default App;
