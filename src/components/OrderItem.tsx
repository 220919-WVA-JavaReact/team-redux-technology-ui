import { Order } from "../models/order"
import { materialDisplayName, priceFormatter } from "../utils/utilityFunctions";
import moment from 'moment';
interface OrderItemProps {
    index: number;
    order: Order;
}

export default function OrderItem(props: OrderItemProps) {
    
    const { index, order } = props;
    
    const d = moment(order.purchase_date).format('MMMM Do YYYY, h:mma');
    
    return (
        <tr>
            <th>{index + 1}</th> 
            <td>{materialDisplayName(order.item.material)} {order.item.name}</td> 
            <td>{order.quantity}</td> 
            <td className='text-accent'>{priceFormatter.format(order.item.price * order.quantity)}</td> 
            <td>{d}</td>
        </tr>
    )
}
