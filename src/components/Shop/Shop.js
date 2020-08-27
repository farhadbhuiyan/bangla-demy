import React from 'react';
import './Shop.css'
import { useState } from 'react';
import Course from '../Course/Course';
import courseData from '../../courseDatabase';
import Cart from '../Cart/Cart';

const Shop = () => {
  const first15 = courseData.slice(0, 15);
  const [courses, setCourses] = useState(first15);

  const [cart, setCart] = useState([]);

  const handleAddCourse = (course) => {
    const newCart = [...cart, course];
    setCart(newCart);
  }

  const totalPrice = cart.reduce((total, current) => total + current.currentPrice, 0);
  return (
    <div className="shop-container">
      <div className="product-container">
        <h1>Browse Our Courses</h1>
        {
          courses.map(course => <Course course={course} handleAddCourse={handleAddCourse}></Course>)
        }
      </div>

      <div className="cart-container">
        <h2>Order Summery</h2>
        <h4>Courses Ordered: {cart.length}</h4>
        <div className="list-group">
          {cart.map(course => <Cart course={course} />)}
          <h6 className="total">Total: ${totalPrice.toFixed(2)} </h6>
        </div>
        <button type="button" className="btn btn-primary btn-block">
          Checkout <span className="badge badge-light"></span>
        </button>
      </div>
    </div>
  );
};

export default Shop;