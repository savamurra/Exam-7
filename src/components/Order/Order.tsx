import './Order.css';
import * as React from 'react';
import {IItems} from '../../types';

interface IOrder {
    items: IItems[];
    deleteFood: (foodsName: string) => void;
}

const Order: React.FC<IOrder> = ({items, deleteFood}) => {
    return (
        <div className='orderList'>
            <h3 className='orderTitle'>Order Details</h3>
            <div className='orderInner'>
                {items.length > 0 ? items.map(item => (
                    <div key={crypto.randomUUID()}
                         className='orderItem'
                    >
                        <p className='orderItemsName'>{item.name}</p>
                        <p>x{item.count}</p>
                        <p>{item.price}KGS</p>
                        <button className='deleteBtn' onClick={() => deleteFood(item.name)}></button>
                    </div>
                )) : <p>Order is empty!
                    Please add some items!</p>}
            </div>
        </div>
    );
};

export default Order;