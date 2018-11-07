import React, { Component } from 'react';
import styles from './styleTodo.css';
class Todo extends Component {
   constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }
componentDidMount() {
    const TaskStorage = localStorage.getItem('items');
    const Tasks = JSON.parse(TaskStorage);
    if(Tasks != null){
    this.setState({items:Tasks});
    }
    
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.items !== this.state.items) {
      localStorage.setItem('items', JSON.stringify(this.state.items));
    }
}
  

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { listId, term } = this.state;

      
      this.setState({items: [...this.state.items,this.state.term]});

  }

  render() {
    return (
      <div className="constructor-to-do">
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} placeholder="Task"/>
          <button>Submit</button>
        </form>
       <List items={this.state.items}/>
      </div>
    );
  }
}

const List = ({ items }) => {
  if (items.length > 0) {
    return (
      <ul>
        {items.map((item,index) => <li key={index}>{item}</li>)}
      </ul>
    );
  }

  return (
    <p>No tasks</p>
  );
};

   
export default Todo;