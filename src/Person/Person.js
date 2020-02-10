// import React from 'react';
// import './Person.css';
// const  pers = (para) =>{
//     return (
//     <div className="Person">
//         <p onClick={para.click}>I am {para.name} and I'm {para.age} years. </p>
//         <p>{para.children}</p>
//         <input type="text" onChange={para.change} value={para.name}/>
//     </div>    
//     );
// }

// export default pers;

import React from 'react';
//import "./Person.css";
//import Radium from 'radium';
import styled from 'styled-components';

const Styler = styled.div`
width:60%;
margin:16px auto;
border:1px solid #eee;
box-shadow:0 2px 3px #ccc;
padding:16px;
text-align:right;    

@media (min-width:550px){
width:480px;
}`

const person = (props) => {
    const style2 = {
        '@media (min-width:300px)':{
            width:'200px'
        }
    };

    return (
    //<div className="Person" style={style2}>
    <Styler>
        <p onClick={props.click}>Hello I'm {props.name} doing this again. This is at age{props.age}.</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </Styler>
    )
};

export default person;