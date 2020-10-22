import React from 'react';
import './Friend.css';
import {useState,useEffect} from 'react';
import Profile from '../Profile/Profile';
import data from '../data/data.json';
import Cart from '../Cart/Cart';

const Friend = () => {
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
        <div className='Shops-container'>
            <div className="product-container">
                <h1>Profile Loaded: {persons.length}</h1>
                <ul>
                    {
                    persons.map(person =><Profile person={person} key={person.id} handleAddSalary={handleAddSalary}></Profile>)
                    }
                </ul>
            </div>
            <div className="cart-container">
                    <Cart friends={friends}></Cart>
           </div>
        </div>
    );
};

export default Friend;