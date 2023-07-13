import React from 'react';
import '../App.css';

function funcomp(){
    return(
            <>
            <div className='box'>
            <h1>This is created using functional Component</h1>
            <p className='paragraph'>This is done using external CSS</p>
            <p style={{color:'blue'}}>This is done using inline CSS</p>
            </div>
           
            
            
            </>
    )
}

export default funcomp;