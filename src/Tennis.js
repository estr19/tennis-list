import React from 'react';
import { Component } from 'react';
import Swal from 'sweetalert2'
import alert from 'sweetalert2-react-content'

export class Tennis extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      tennisList: [],
      completedList: [],
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleDoneClick = this.handleDoneClick.bind(this);
  }

  onChangeEvent(e) {
    this.setState({userInput: e})
  }

  addItem(input) {
    if (input === '') {
      const MySwal = alert(Swal);
      MySwal.fire({
        title: <strong>Please do not leave the space empty!</strong>,
        confirmButtonText: `Let's do better next time 😉`,
        icon: 'error'
      })
    }
    else {
      document.querySelector("#listSpan").style.display = "block";
      let listArray = this.state.tennisList;
      listArray.push(input);
      this.setState({tennisList: listArray, userInput: ''});
      console.log(listArray);
    }
  }

  deleteAll() {
    let listArray = this.state.tennisList;
    let complete = this.state.completedList;
    listArray = [];
    complete = [];
    this.setState({tennisList: listArray, completedList: complete});
    document.querySelector("#listSpan").style.display = "none";
    document.querySelector("#doneSpan").style.display = "none";
  }

  submitForm(e) {
    e.preventDefault();
  }

  handleClick(e) {
    const li = e.target;
    let doneList = this.state.tennisList;
    let complete = this.state.completedList;
    switch (e.detail) {
      case 1:
        document.querySelector("#doneSpan").style.display = "block";
        complete.push(li.innerText);
        doneList.splice(doneList.indexOf(li.innerText), 1);
        this.setState({
          tennisList: doneList
        })
        break;
      // case 2:
      //   doneList.splice(doneList.indexOf(li.innerText), 1);
      //   this.setState({
      //     completedList: complete
      //   })
      // break;
      default:
    }
  };

  handleDoneClick(e) {
    const li = e.target;
    let doneList = this.state.tennisList;
    let complete = this.state.completedList;
    switch (e.detail) {
      case 1:
        doneList.push(li.innerText);
        complete.splice(complete.indexOf(li.innerText), 1);
        this.setState({
          completedList: complete
        })
        break;
      // case 2:
      //   complete.splice(complete.indexOf(li.innerText), 1);
      //   this.setState({
      //     tennisList: doneList
      //   })
      //  break;
      default:
    }
  };

  render() {
    return(
      <div>
        <form onSubmit={this.submitForm}>
          <div className='container'>
            <input onChange={(e) => {this.onChangeEvent(e.target.value)}}
                  type='text'
                  placeholder='What do you need to get done today?'
                  value={this.state.userInput} />
          </div>
          <div className='container'>
            <button className='btn delete' type="button" onClick={() => {this.deleteAll()}}>Clear All</button>
            <button className='btn add' type="submit" onClick={() => {this.addItem(this.state.userInput)}}>Add</button>
          </div>
          <div id='bullets' className='container'>
            <br></br>
          <span id='listSpan'><h3>I still need to do this:</h3></span>
            <ul id='list'>
              {this.state.tennisList.map((item, index) => (
                <li className='paragraph' onClick={this.handleClick} key={index}>{item}</li>
              ))}
            </ul>
            <span id='doneSpan'><h3>Woo-hoo, I'm done with these!</h3></span>
            <ul id='done'>
              {this.state.completedList.map((item, index) => (
                <li className='paragraph' onClick={this.handleDoneClick} key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </form>
      </div>
    )
  }
}