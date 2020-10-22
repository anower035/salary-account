import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const friends=props.friends;
    console.log(friends)
    const totalSalaries=friends.reduce((totalSalaries,money)=>totalSalaries+money.salary,0)
    // let totalSalaries=0
    // for (let i = 0; i<friends.length; i++) {
    //   const money = friends[i];
    //    totalSalaries=totalSalaries+money.salary
    // }
    return (
        <div className="Cart">
            <h1>Friend list of New Person</h1>
            <p><small>New Friend:</small> {friends.length}</p>
            <p><small>Total Salaries:$</small> {totalSalaries}</p>
        </div>
    );
};

export default Cart;