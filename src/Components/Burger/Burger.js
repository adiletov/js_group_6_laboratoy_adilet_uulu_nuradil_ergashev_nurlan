import React from 'react';
import './Burger.css'
import nanoid from 'nanoid';
const fields = arr => {
    let arrDivs = [];
    for (let i = 0;i < arr.length; i++){
        for (let j = 0; j < arr[i].count;j++){
            arrDivs.push(<div className={arr[i].name} key={nanoid()}/>)
        }
    }
    return arrDivs
};
const Burger = (props) => {


    return (
        <div className="Burger">
            <div className="BreadTop">
                <div className="Seeds1"/>
                <div className="Seeds2"/>
            </div>

            {fields(props.ingredientsApp)}

            <div className="BreadBottom"/>
            <div>Всего : {props.totalPriceApp}  сом</div>
        </div>
    );
};

export default Burger;