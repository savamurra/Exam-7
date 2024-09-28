import * as React from 'react';
import './Food.css';
import {IFood} from '../../types';

interface FoodProps {
    foods: IFood[]
    addFood: (foodsName: string) => void;
}

const Food: React.FC<FoodProps> = ({foods, addFood}) => {
    return (
        <div className='foodList'>
            <h3 className='title'>Add Items</h3>
            {foods.map(food => (
                <button key={food.name}
                        className='foodWrapper'
                        onClick={() => addFood(food.name)}
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