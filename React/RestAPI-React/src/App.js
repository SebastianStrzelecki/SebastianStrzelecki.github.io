import React from 'react';
import './App.css';



class App extends React.Component {
  constructor() {
    super();    
    this.state = {
      UsersFilter:[],
      isFilter:false,
      contacts:[]
    };
  }
    
 componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(resp => {
        resp.forEach(user=>{
            this.setState((prevState)=>{return{contacts:[...prevState.contacts,user.name]}})
        })   
    });
  };
    
    
    onFilter=(e)=>{
        
        let updatedList = this.state.contacts;
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


  render () {
     
        let filter = this.state.isFilter ? this.state.UsersFilter : this.state.contacts;
      
    return (
      <div className="filter">
          <AppHeader />
          <input className="add" onChange={this.onFilter} placeholder="Search User"></input>
         <UsersList users={filter} />
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
        <h1>Rest API</h1>
    </header>
    )
}
export default App;
