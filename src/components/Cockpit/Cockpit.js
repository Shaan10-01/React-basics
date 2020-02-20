import React , {useEffect} from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    useEffect(() => {
        console.log("[Cockpit.js] useEffect")
    });

    let btn ='';
    if(props.showPersons){
        btn = classes.Red;
    }
    
    let assignedcClasses = [];
    if(props.persons.length <=2 ){
      assignedcClasses.push(classes.red);
      assignedcClasses.push(classes.bold);
    }

    if(props.persons.length <=1 ){
      assignedcClasses.push(classes.italics);
      assignedcClasses.shift();
    }
    if(props.persons.length <1 ){
        assignedcClasses.push(classes.green); 
    }

    return(
        <div className={classes.Cockpit}>
        <h1>{props.title}</h1>
        <p className={assignedcClasses.join(" ")}>I have created this newly.</p>
        <button 
            className={btn} 
            onClick={props.fucked}>Switch Names
        </button>
        </div>
    );
}

export default cockpit;