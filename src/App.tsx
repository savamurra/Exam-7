import './App.css';
import Food from './components/Food/Food.tsx';
import Order from './components/Order/Order.tsx';
import burger from "./assets/burger.svg";
import pizza from "./assets/pizza.svg";
import sushi from "./assets/sushi.svg";
import tea from "./assets/tea.svg";
import cola from "./assets/cola.svg";
import coffee from "./assets/coffee.svg";
import {IFood, IItems} from "./types";
import {useState} from "react";


function App() {
    const foods: IFood[] = [
        {name: 'Hamburger', price: 120, image: burger},
        {name: 'Pizza', price: 70, image: pizza},
        {name: 'Sushi', price: 200, image: sushi},
        {name: 'Tea', price: 50, image: tea},
        {name: 'Cola', price: 80, image: cola},
        {name: 'Coffee', price: 120, image: coffee}
    ];

    const [itemsCount, setItemsCount] = useState<IItems[]>([
        {name: 'Hamburger', count: 0, price: 120},
        {name: 'Pizza', count: 0, price: 70},
        {name: 'Sushi', count: 0, price: 200},
        {name: 'Tea', count: 0, price: 50},
        {name: 'Cola', count: 0, price: 80},
        {name: 'Coffee', count: 0, price: 120},
    ]);

    const [addedItems, setAddedItems] = useState<IItems[]>([])

    const addItemsToOrder = (foodsName: string) => {
        console.log(foodsName)
        setItemsCount(prevState =>
            prevState.map(foods =>
                foods.name === foodsName ? {...foods, count: foods.count + 1} : foods,
            )
        );

        const ingredientToAdd = foods.find(item => item.name === foodsName);

        setAddedItems(prevItems => {
            const currentOrder = prevItems.find(item => item.name === foodsName);
            if (currentOrder) {
                return prevItems.map(item =>
                    item.name === foodsName ? {
                        ...item,
                        count: item.count + 1,
                        price: item.price + ingredientToAdd!.price
                    } : item
                );
            } else {
                return [...prevItems, {name: foodsName, count: 1, price: ingredientToAdd!.price}];
            }
        })


        console.log(itemsCount)
    };

    return (
        <>
            <Food foods={foods} addFood={addItemsToOrder}/>
            <Order items={addedItems}/>
        </>
    );
}

export default App;
