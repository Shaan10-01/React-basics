import React, { Component } from 'react';
import Person from "./Person/Person";

class Persons extends Component{

    // static getDerivedStateFromProps(props,state){
    //     console.log("[Person.js] getDerivedStateFromProps.");
    //     return state;
    // }

    shouldComponentUpdate(nextProps,nextState){
        console.log("[Persons.js] shouldComponentUpdate.");
        return true;
    }

    getSnapshotBeforeUpdate(pervProps,prevState){
        console.log("[Persons.js] getSnapshotBeforeUpdate.");
        return {message: 'What the fuck??'};
    }

   componentDidUpdate(pervProps,prevState,snapshot){
       console.log("[Persons.js] componentDidUpdate.")
        console.log(snapshot);
    }



    render(){
        console.log("[Persons.js] rendering..");
        return this.props.persons.map((nanu,index) => {
        return <Person
        click={() => this.props.clicked(index)}
        name={nanu.name}
        age={nanu.age}
        key={nanu.id}
        changed={(event)=> this.props.changed(event,nanu.id)}/>
    } );
    }
    
}
    



export default Persons;