import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './MyOrders.css';
const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  //  handle cancel
  const handleCancel = (id) => {
    const proceed = window.confirm('Are you cancel this service ?');
    if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert('Your order canceled');
            const remainingOrders = orders.filter((order) => order._id !== id);
            setOrders(remainingOrders);
          }
        });
    }
  };
  useEffect(() => {
    fetch('http://localhost:5000/orders')
      .then((res) => res.json())
      .then((data) => {
        const myOrders = data.filter((order) => order.userEmail === user.email);
        setOrders(myOrders);
      });
  }, []);
  return (
    <div className="py-5 px-3">
      <h1 className="primary-color text-center pb-5">My Orders</h1>
      {orders.map((order) => (
        <div key={order._key} className="d-flex justify-content-center mt-4">
          <div className="single-order shadow">
            <div className="order-img">
              <img style={{ width: '100px' }} src={order.img} alt="" />
            </div>
            <div className="order-details">
              <h5>{order.serviceName}</h5>
              <p>Order Id : {order.id}</p>
            </div>
            <h3 className="primary-color">
              <strong>${order.serviceFee}</strong>
            </h3>
            <div>
              {order.status === 'pending' ? (
                <span className="pending">{order.status}</span>
              ) : (
                <span className="approved">{order.status}</span>
              )}
            </div>
            <button
              className="btn btn-danger mt-3 mt-md-0"
              onClick={() => handleCancel(order._id)}
            >
              Cancel
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;