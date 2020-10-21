import React from 'react';

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
        <div>
            <h1>New Friend:{friends.length}</h1>
            <h1>Total Salaries:$ {totalSalaries}</h1>
        </div>
    );
};

export default Cart;