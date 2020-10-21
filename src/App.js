import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
import Profile from './components/Profile/Profile';
import data from './components/data/data.json';
import Cart from './components/Cart/Cart';

function App() {
  const [persons,setPersons]=useState([])
  const [friends,setFriends]=useState([])
  useEffect(() =>{
    setPersons(data)
  },[])
  const handleAddSalary=(person)=>{
    const newFriends=[...friends,person]
    setFriends(newFriends)
  }
  return (
    <div className="App">
      <h1>Profile Loaded: {persons.length}</h1>
      <h1>Profile Clicked: {friends.length}</h1>
      <Cart friends={friends}></Cart>
     <ul>
        {
          persons.map(person =><Profile person={person} key={person.id} handleAddSalary={handleAddSalary}></Profile>)
        }
     </ul>
        
        
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
