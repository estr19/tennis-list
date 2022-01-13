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
        let pushedDown = li.innerText;
        let index = doneList.indexOf(pushedDown);
        let newIndex = doneList.length - 1;
        console.log(index);
        console.log(newIndex);
        console.log(doneList[index]);
        complete.push(pushedDown);
        doneList.splice(doneList.indexOf(li.innerText), 1);
        this.setState({
          tennisList: doneList
        })
        console.log(doneList);
        break;
      case 2:
        console.log(doneList);
        doneList.splice(doneList.indexOf(li.innerText), 1);
        this.setState({
          completedList: complete
        })
        break;
      default:
    }
  };

  handleDoneClick(e) {
    const li = e.target;
    let doneList = this.state.tennisList;
    let complete = this.state.completedList;
    switch (e.detail) {
      case 1:
        let pushedUp = li.innerText;
        let index = complete.indexOf(pushedUp);
        let newIndex = complete.length - 1;
        console.log(index);
        console.log(newIndex);
        console.log(complete[index]);
        doneList.push(pushedUp);
        complete.splice(complete.indexOf(li.innerText), 1);
        this.setState({
          completedList: complete
        })
        console.log(doneList);
        break;
      case 2:
        console.log(complete);
        complete.splice(complete.indexOf(li.innerText), 1);
        this.setState({
          tennisList: doneList
        })
        break;
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
                  placeholder='What "tools for success" do you need?'
                  value={this.state.userInput} />
          </div>
          <div className='container'>
            <button className='btn delete' type="button" onClick={() => {this.deleteAll()}}>Clear All</button>
            <button className='btn add' type="submit" onClick={() => {this.addItem(this.state.userInput)}}>Add</button>
          </div>
          <div id='bullets' className='container'>
            <ul id='list'>
              {this.state.tennisList.map((item, index) => (
                <li className='paragraph' onClick={this.handleClick} key={index}>{item}</li>
              ))}
            </ul>
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