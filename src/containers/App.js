import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'
//import Per from './Person/Person.js';
//import Radium, {StyleRoot} from 'radium';
//import styled from 'styled-components';
//import ErrorBoundary from './ErrorBoundary/ErrorBoundary';


class App extends Component{

constructor(props) {
  super(props);
  console.log("[App.js] constructor");
}

state = {
  persons: [
    {id:'gfhjdh',name:'Shaan',age :20},
    {id:'hgfhgkf',name:'Stephen',age:66},
    {id:'bkbjk',name : 'Heroku',age:99}
  ],
  showState:false
}

static getDerivedStateFromProps(props,state){
  console.log("[App.js] getDerivedStateFromProps",props);
  return state;
}


switchHandler = (newName) =>{
  this.setState({
    persons:[
      {name:newName,age :20},
    {name:'Stannis',age:66},
    {name : 'Kararu',age:12}
    ]
  })
}

nameHandler = (event,id) => {
  const finder = this.state.persons.findIndex(p => {
    return p.id === id;
  });

  const pers = {
    ...this.state.persons[finder]
  };

  pers.name = event.target.value;
  const p = [...this.state.persons];
  p[finder] = pers;

  this.setState({ persons:p });
}

showHandler = () => {
  const musa = this.state.showState;
  this.setState({
    showState:!musa});
}

deleteHandler = (ind) => {
const fetch = [...this.state.persons]
fetch.splice(ind,1)
this.setState({persons:fetch})
}

componentDidMount(){
  console.log("[App.js] componentDidMount ");
}

shouldComponentUpdate(nextProps,nextState){
  console.log("[App.js] shouldComponentUpdate ");
  return true;
}

componentDidUpdate(){
  console.log("[App.js] componentDidUpdate ");
}


  render(){

    console.log("[App.js] rendering ");
      
    let trial = null;

    if(this.state.showState){
      trial = <Persons 
      persons={this.state.persons} 
      clicked={this.deleteHandler} 
      changed={this.nameHandler} />;
    }

     return(       
      <div className = {classes.App}>
        <Cockpit 
        title={this.props.appTitle}
        showPersons={this.state.showState}
        persons={this.state.persons}
        fucked={this.showHandler} 
        />          
        {trial}        
      </div>
      
    );
    
  }
}



export default App;
