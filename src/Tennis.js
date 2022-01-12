import React from 'react';
import { Component } from 'react';
import Swal from 'sweetalert2'
import alert from 'sweetalert2-react-content'

export class Tennis extends Component {
  state = {
    userInput: '',
    groceryList: []
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
      let listArray = this.state.groceryList;
      listArray.push(input);
      this.setState({groceryList: listArray, userInput: ''});
    }
  }

  crossedOut(e) {
    const li = e.target;
    li.classList.toggle('crossed');
    let listArray = this.state.groceryList;
    listArray.splice(listArray.indexOf(e.target.innerText), 1);
    this.setState({
      groceryList: listArray
    })
  }

  delOneItem(e) {
    let ToDoArray = this.state.groceryList;
    ToDoArray.splice(e.index, 1);
    this.setState({ToDoList: ToDoArray});
  }

  deleteAll() {
    let listArray = this.state.groceryList;
    listArray = [];
    this.setState({groceryList: listArray});
  }

  submitForm(e) {
    e.preventDefault();
  }

  // handleClick(e) {
  //   switch (e.detail) {
  //     case 1:
  //       const li = e.target;
  //       li.classList.toggle('crossed');
  //       console.log(li.indexOf());
  //       // console.log("click");
  //       break;
  //     case 2:
  //       const lii = e.target;
  //       lii.classList.add('removed');
  //       break;
  //     // case 3:
  //     //   const liii = e.target;
  //     //   liii.classlist.add('framed');
  //     //   // console.log("triple click");
  //     //   break;
  //     default:
  //   }
  // };

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
          <div className='container'>
            <ul id="list">
              {this.state.groceryList.map((item, index) => (
                <li key={index} onDoubleClick={(e) => this.delOneItem({index})} onClick={this.crossedOut}>&nbsp;{item}</li>
                // <li onClick={this.handleClick} key={index}>&nbsp;{item}</li>
              ))}
            </ul>
          </div>
        </form>
      </div>
    )
  }
}