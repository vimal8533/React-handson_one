
import './App.css';
import Funcomp from './components/function';
import Classcompo from './components/class';
import { useState } from 'react';
function App() {
    const [fstate,setFstate]=useState(false)
    const [cstate,setCstate]=useState(false)

  return (
    <>
       <h1  style={{textShadow:"4px 4px aqua"}}>Styling using Functional and Class Component</h1>
       <div className='forbutton'>
       <button onClick={()=>setFstate (!fstate)}>To see Styling in functional Component</button>
      <button  onClick={()=>setCstate (!cstate)}>To see Styling in Class Component</button>
       </div>
       <div className='parent_box'>  
       {fstate?<Funcomp/>:" "}
      {cstate?<Classcompo/>:" "}
       </div>
     
    </>
    
  );
}

export default App;
