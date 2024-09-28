import * as React from 'react';
interface Props {
    total: number;
}
const Total:React.FC<Props> = ({total}) => {
    return (
        <p className='total'>Total Price: {total}</p>
    );
};

export default Total;