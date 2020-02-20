import React, { Component } from 'react';
import classes from "./Person.css";


class Person extends Component{

//     static getDerivedStateFromProps(props,state){
//         console.log("[Person.js] getDerivedStateFromProps.");
//         return state;
//     }

//     shouldComponentUpdate(nextProps,nextState){
//         console.log("[Person.js] shouldComponentUpdate.");
//         return true;
//     }

//     getSnapshotBeforeUpdate(pervProps,prevState){
//         console.log("[Person.js] getSnapshotBeforeUpdate.");
//    }

//    componentDidUpdate(){
//        console.log("[Person.js] componentDidUpdate.")
//    }

    render(){
        console.log("[Person.js] rendering----")
        return (
        <div className={classes.Person}>
        <p onClick={this.props.click}>Hello I'm {this.props.name} doing this again. This is at age{this.props.age}.</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
    </div>
    )
    };
}
        

export default Person;