import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
import ErroModal from './components/UI/ErrorModal';

function App() {
  const [userList,setUserList]= useState([]);
  
  const addUserHandler = (uName,uAge) =>{
    setUserList((prevUserList)=>{
      return [...prevUserList, {name:uName,age:uAge}];
    });
  }

  return (
    <> 
        <AddUser onAddUser={addUserHandler}/> 
        <UserList users={userList}/>
    </>
  );
}

export default App;
