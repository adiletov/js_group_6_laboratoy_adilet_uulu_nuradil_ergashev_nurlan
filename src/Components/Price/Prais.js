import React from 'react';
import meatImage from './img/meat.png';
import cheeseImage from './img/cheese.png';
import saladImage from './img/salad.png';
import baconImage from './img/bacon.png';

const Price = (props) => {
    const Ingredients = [
        {name: 'Meat', price: 50, image: meatImage },
        {name: 'Cheese', price: 20, image:cheeseImage},
        {name: 'Salad', price: 5, image: saladImage},
        {name: 'Bacon', price: 30, image:baconImage},
    ];
    return (

        <div className="praisList">
            {Ingredients.map((ingregient,index) =>
                <div key={index}>
                    <img onClick={() => props.addIngredient(ingregient)}
                         className="img" src={ingregient.image}
                         id={ingregient.name} alt={ingregient.name}
                    />
                    <span>{ingregient.name} </span>
                    <span> x {props.ingredientsApp[index].count} шт</span>
                    {props.ingredientsApp[index].count > 0 ?
                        <button
                                id={props.id}
                                onClick={() => props.clickRemove(ingregient)}
                    >X</button>: null
                    }

                </div>
            )}
        </div>
    );
};

export default Price;
