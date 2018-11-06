import React, { Component } from 'react';
import './App.css';



class App extends React.Component {
  constructor() {
    super();    
    
    this.state = {
      Users: [],
      newUser:'',
        error: '',
        UsersFilter:[],
        isFilter:false
    };
  }

    onChange = (event) => {
    this.setState({ newUser: event.target.value });
  }
    onFilter=(e)=>{
        
        let updatedList = this.state.Users;
        let test = updatedList.filter(item=>{return item.toLowerCase().includes(e.target.value.toLowerCase())}  ); 
        this.setState({
            UsersFilter:test,
            isFilter:true
        })
        if(e.target.value.length <0){
            this.setState({
            isFilter:false
        })
        }
       
    }

  onSubmit = (event) => { 
      event.preventDefault();
      if( this.state.Users.length==10)
         this.setState({error:'Wprowadzono maksymalną liczbę graczy'});
      else if(this.state.newUser.length < 3){
          this.setState({error:'Nazwa użytkownika musi posiadać więcej niż 3 znaki'});
      }
    else(
    this.setState({
        newUser: '',
        Users: [...this.state.Users, this.state.newUser],
        error:'',
        isFilter:false
    }));
}
  
  render () {
      let filterUsers = '';
      if(this.state.isFilter)
          {
              filterUsers = this.state.UsersFilter;
          }
      else{
         filterUsers = this.state.Users;
      }
    return (
      <div className="filter">
          <AppHeader />
          <input className="add" onChange={this.onFilter} placeholder="Search User"></input>
        
          <form onSubmit={this.onSubmit}><input className="add" value={this.state.newUser} onChange={this.onChange} placeholder="Enter User"></input>
                <button type="submit">add</button>
        
                <span className="validation">&nbsp;{this.state.error}</span>
          </form>
        
         <UsersList users={filterUsers} />
    
        
        
      </div>
    );
  }
};

const UsersList = ({ users }) => {
  if (users.length > 0) {
    return (
      <ul>
        {users.map((user,index) => <li key={index}>{user}</li>)}
      </ul>
    );
  }

  return (
    <p>Brak Graczy!</p>
  );
};
function AppHeader(){
    return(
    <header className="TitleHeader">
        <h1>Dodaj 10 użytkowników</h1>
    </header>
    )
}
export default App;
