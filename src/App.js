import './App.css';
import JSON from './demo.json'
import { useState } from 'react';
function App() {

  const [curr,setFilter]=useState("");// taking an empty strinng as the current value.
  


  return (
    <div className="App">
      <div className='container'>
        <input className='inp' onChange={(event)=>setFilter( event.target.value)} placeholder="Search....." />
          {/* on any change to the input tag, re-setting(updating) the current value in useState */}
        {JSON.filter((val)=>{
          if(curr=="")    // filtering through the values, every time checking the whole data, not a very efficient way though
          return val;
          else if(val.first_name.toLowerCase().includes(curr.toLowerCase()))
            return val;       // using .includes, which automatically checks if what you typed has the substring or not 
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
