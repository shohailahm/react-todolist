import React, { Component } from 'react';
import logo from './logo.svg';
import ToDoList from './ToDoList';
import TodoItems from './ToDoItems';
import './App.css';

class App extends Component {
  inputElement = React.createRef()
  constructor(props){
    super(props);
    this.state={
      items: [],
      currentItem: {
        text: '',
        key: '',
      },
    }
    }
  
  addItem=(e)=>{
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '' },
      })
    }

  }
  deleteItem=(key)=>{
    debugger
   let entries=[...this.state.items];
   let newEntries=entries.filter((i,ind)=>i.key !== key)
   this.setState({items:newEntries});
  }

  handleInput=(e)=>{
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem,
    })
  }
  render() {
    return (
      <div className="App">
        <ToDoList    addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <TodoItems entries={this.state.items} deleteItem={this.deleteItem}/>
      </div>
    );
  }
}

export default App;
