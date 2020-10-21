import React from 'react';
import './Profile.css';

const Profile = (props) => {
    console.log(props)
    const {cell,email,gender,name,image,country,salary}=props.person
    const handleAddSalary = props.handleAddSalary;
    return (
        <div className='main'>
            <div className='img-holder'>
                <img src={image} alt="" />
                <button onClick={() => handleAddSalary(props.person)}>Add Friend</button>
            </div>
            <div className='text'>
                <h2>{name}</h2>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>Country:</strong><small> {country}</small></p>
                <p><strong>Email:</strong><small> {email}</small></p>
                 <p><strong>Salary</strong>:{salary}</p>
                <h2>{cell}</h2>
            </div>
            
        </div>
    );
};
export default Profile;