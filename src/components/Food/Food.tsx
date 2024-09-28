import * as React from 'react';
import burger from '../../assets/burger.svg';
import pizza from '../../assets/pizza.svg';
import sushi from '../../assets/sushi.svg';
import tea from '../../assets/tea.svg';
import cola from '../../assets/cola.svg';
import coffee from '../../assets/coffee.svg';
import './Food.css';

interface FoodProps {
    addFood: React.MouseEventHandler<HTMLDivElement>;
}

const Food:React.FC<FoodProps> = ({addFood}) => {
    const foods = [
        {name: 'Hamburger', price: 120, image: burger},
        {name: 'Pizza', price: 70, image: pizza},
        {name: 'Sushi', price: 200, image: sushi},
        {name: 'Tea', price: 50, image: tea},
        {name: 'Cola', price: 80, image: cola},
        {name: 'Coffee', price: 120, image: coffee}
    ]

    return (
        <div className='foodList'>
            <h3 className='title'>Add Items</h3>
            {foods.map(food => (
                <button key={food.name}
                        className='foodWrapper'
                        onClick={addFood}
                >
                    <img src={food.image} alt={food.name}/>
                    <p className='foodName'>{food.name}</p>
                    <p className='foodPrice'>Price: {food.price} KGS</p>
                </button>
            ))}
        </div>
    );
};

export default Food;