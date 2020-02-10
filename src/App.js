import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
//import Per from './Person/Person.js';
//import Radium, {StyleRoot} from 'radium';
import styled from 'styled-components';


class App extends Component{
state = {
  persons: [
    {id:'gfhjdh',name:'Shaan',age :20},
    {id:'hgfhgkf',name:'Stephen',age:66},
    {id:'bkbjk',name : 'Heroku',age:99}
  ],
  showState:false
}


switchHandler = (newName) =>{
  //console.log("Clickeddd!!");
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
//const fetch = this.state.persons;
const fetch = [...this.state.persons]
fetch.splice(ind,1)
this.setState({persons:fetch})
}


  render(){

    // const style1 = {
    //   backgroundColor:'green',
    //   color:'white',
    //   font:'inherit',
    //   border:'10px solid violet',
    //   padding: '20px',
    //   cursor:'pointer',
    //   ':hover':{
    //     backgroundColor:'lightgreen',
    //     color:"black"
    //   }
    // };

    let trial = null;

    if(this.state.showState){
      trial = (<div>
        {
          this.state.persons.map((nanu,index) =>{
            return(<Person
            click={() => this.deleteHandler(index)}
            name={nanu.name}
            age={nanu.age}
            key={nanu.id}
            changed={(event)=> this.nameHandler(event,nanu.id)}
            />)
          })
        }

      {/* { <Person 
      name={this.state.persons[0].name} 
      age={this.state.persons[0].age}/>
      <Person 
      name={this.state.persons[1].name} 
      age={this.state.persons[1].age}
      click={this.switchHandler.bind(this,"God levelzz")}
      changed={this.nameHandler}>
        This is the text output due to children.</Person>
      <Person 
      name={this.state.persons[2].name} 
      age={this.state.persons[2].age}/> } */}
      </div>);
      // style1.backgroundColor='red';
      // style1[':hover'] = {
      //   backgroundColor:'lightsalmon',
      //   color:"black"
      // }
    }

    let classes = [];
    if(this.state.persons.length <=2 ){
      classes.push('red');
    }

    if(this.state.persons.length <=1 ){
      classes.push('bold');
    }

    if(this.state.persons.length <1 ){
      classes = ['green italics'];
    }

     return(
       
      <div className = "App">
        <h1>Hello!! </h1>
        <p className={classes.join(" ")}>I have created this newly.</p>
        <button onClick={this.showHandler}>
          Switch Names
        </button>          
        {trial}        
      </div>
      
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello I\'m new'))
  }
}



/*class App extends Component {
  state = {
    persons :[
    {name:"Shaan",age:22},
    {name:"Sush",age:76},
    {name:"Marine",age:36}
    ]
  }
  
  nameSwitcher = (n,y) => {
    //console.log("Clickeddd!!!");
    //this.state.persons[0].name = "Shivv";
    this.setState({
      persons:[
      {name:n,age:22},
      {name:"Sush",age:y},
      {name:"Marine",age:36}]
    })
  }

  nameChanger = (alpha) =>{
    this.setState({
      persons:[
      {name:"Shaan",age:22},
      {name:alpha.target.value,age:44},
      {name:"Marine",age:36}]
    })
  }

  render() {
    const style = {
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid black',
      padding: '8px',
      cursor:'pointer'
    };

    return (
      <div className="App">
        <h1>A React App hereS.</h1>
        <button 
        style={style}
        onClick={this.nameSwitcher.bind(this,"Gully",999)}>Switch name.</button>
        <p>THis is awesomeS</p>
        <Per
         click = {() => {return this.nameSwitcher("cromom",800)}}
         name={this.state.persons[0].name} 
         age={this.state.persons[0].age}/>
        <Per
         click = {() => this.nameSwitcher("Maamu",69)}
         name={this.state.persons[1].name} 
         age={this.state.persons[1].age}
         change={this.nameChanger}>
          My hobbies : CAR
          </Per>
        <Per name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
      
    );
  }
  //return React.createElement('div',null,'h1',"I am create");
}*/

export default App;
