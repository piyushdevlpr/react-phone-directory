import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PhoneList from './PhoneList' ;
import ViewPhone from './ViewPhone' ;
import './App.css';

class App extends Component {
  constructor(){
    super() ;
    this.state = {
      items: [],
      text:'',
      number: '',
      toadd: false,
      toview:false
    }
    this.handleInput = this.handleInput.bind(this)
  }
  handleInput = e => {
    e.preventDefault() ;
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  addItem = e => {
    //e.preventDefault()
    const newItem = {text :this.state.text, number : this.state.number , key : Date.now()}
    //const newItem = this.state.currentItem
    if (newItem.text !== '' && newItem.number !== '') {
      console.log(newItem)
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        text: "",
        number: "",
      })
    }
  }
  addtrue = e => {
    this.setState({
      toadd: true,
      toview:false
    })
  }
  viewtrue = e =>{
    this.setState({
      toadd: false,
      toview:true
    })
  }
  deleteItem = key => {
    const filteredItems = this.state.items.filter(items => {
      return items.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }
  currentItem = e =>{
    e = (<div>
    <label>Name : </label>
   {this.state.text}  
   <br/>
   <label>Number : </label>
   {this.state.number} 
   
   </div>) 
   return e ;
  }
  check = show =>{
    show = <div></div>
    if(this.state.toadd){
      return <PhoneList 
      addItem={this.addItem}
      inputElement1={this.inputElement1}
      inputElement2={this.inputElement2}
      handleInput={this.handleInput}
      currentItem={this.currentItem}
      />
    }else if(this.state.toview){
      return <ViewPhone 
      entries={this.state.items}
      deleteItem={this.deleteItem} />
    }
  }
  render() {
   var show = <div></div>;
    return (
      <div className="App" class="container">
      <div class="jumbotron text-center"><h1>PHONE DIRECTORY</h1></div>
          <div>
            <button class="btn btn-primary container mb-1" onClick={this.addtrue}>add</button>
          </div>
          <div>

          </div>
          <div>
            <button class="btn btn-primary container mb-1" onClick={this.viewtrue}>view</button>
          </div>
          {console.log(this.state)}
          {this.check(show)}
          <div>
              {show}
          </div>
          
    </div>
    );
  }
}

export default App;
