import React from 'react';


export default class ToDoList extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    componentDidUpdate() {
        this.props.inputElement.current.focus()
      }
    render(){
        return(
            <div className="todoListMain">
            <div className="header">
             <form onSubmit={this.props.addItem}>
                <input placeholder="Task"  value={this.props.currentItem.text}
                 onChange={this.props.handleInput}
                 ref={this.props.inputElement}
                 />
                 
                <button type="submit"> Add Task </button>
              </form>
            </div>
          </div>
        )
    }
    
}