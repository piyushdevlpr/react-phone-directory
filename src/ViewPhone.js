import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
class ViewPhone extends Component {
deleteItm=key=>{
        this.props.deleteItem(key)
}
showlist=listitems=>{
    const listItems = listitems.map((list)=> <li class="list-group-item mb-1 text-center" key={list.key} ><span class="mx-5">{list.text}</span> <span class="mx-5">{list.number}</span> <button class="mx-5 btn btn-danger" onClick={() => this.deleteItm(list.key)}>delete</button></li>)
    return listItems ;
}
  render() {
    const todoEntries = this.props.entries
    //const listItems = todoEntries.map()
    console.log(todoEntries)
    return <ul class = "list-group mb-1">  {this.showlist(todoEntries)}
    </ul>

    // return <ul className="theList" >{listItems}</ul>
  }
}

export default ViewPhone