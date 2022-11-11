import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import OrderItem from "../components/OrderItem";
import { Order } from "../models/order";
import { User } from "../models/user"
import { useAPI } from "../utils/utilityFunctions";

interface IOrdersProps {
    user: User | undefined
}

export default function Orders(props: IOrdersProps) {
    
    const { user } = props;
    const [orders, setOrders] = useState<Order[]>();

    useEffect(() => {
        getPastOrders()
    },[])

    async function getPastOrders(){
        const data = await useAPI(`/orders/${user?.user_id}`, 'GET');
        setOrders(data);
    }
    
    return (
        user? <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th> 
              <th>Name</th> 
              <th>Quantity</th> 
              <th>Total</th> 
              <th>Purchased Time</th> 
            </tr>
          </thead> 
          <tbody>
            {orders?.map((order, i) => <OrderItem key={i} index={i} order={order} />)}
          </tbody> 
          <tfoot>
            <tr>
              <th></th> 
              <th>Name</th> 
              <th>Quantity</th> 
              <th>Total</th> 
              <th>Purchased Time</th> 
            </tr>
          </tfoot>
        </table>
      </div> :
        <Navigate to="/" />
    )
}
