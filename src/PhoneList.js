import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
class PhoneList extends Component {
  render() {
    var e = <div></div>
    return (
      <div className="phoneListMain">
        <div className="header" class="mb-1">
          <form  onReset={this.props.addItem}>
            <input placeholder="Name"
                          class="form-control" 
                          name = "text"
                          ref={this.props.inputElement1}
                          value={this.props.text}
                          onChange={this.props.handleInput}
            />
            <br/>
            <input placeholder="Number"
                          class="form-control"
                          name = "number"
                          type = 'number'
                          ref={this.props.inputElement2}
                          value={this.props.number}
                          onChange={this.props.handleInput}
            />
            <br/>
            {this.props.currentItem(e)}
            <br/>
            <button class ="btn btn-primary" type="reset"> Add Contact </button>
          </form>
        </div>
      </div>
    )
  }
}

export default PhoneList