import './Order.css';
import * as React from 'react';
import {IItems} from '../../types';
interface IOrder {
    items: IItems[];
}
const Order:React.FC<IOrder> = ({items}) => {
    return (
        <div className='orderList'>
            <h3 className='orderTitle'>Order Details</h3>
            <div className='orderInner'>
                Order is empty!
                Please add some items!
                {items.map(item => (
                    <p>{item.name} x{item.count} {item.price}KGS</p>
                ))}
            </div>
        </div>
    );
};

export default Order;