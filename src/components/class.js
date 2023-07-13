import React,{Component} from 'react';
import '../App.css';

class classcompo extends Component{
    render(){
        return(
            <>
            <div className='box1'>
            <h1>This is created using Class Component</h1>
            <p className='paragraph'>This is done using external CSS</p>
            <p style={{color:'blue'}}>This is done using inline CSS</p>
            </div>

            </>
        )
    }
}

export default classcompo
