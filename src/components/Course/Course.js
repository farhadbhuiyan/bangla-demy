import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardDeck } from 'react-bootstrap';
import './Course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faUser, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'

const Course = (props) => {
  console.log(props);
  return (
    <div>
      <div className="card-container">
        <div className="card-wrap">
          <div className='card'>
            <div className='card-img-top'>
              <img alt='' className='img-fluid' src={props.course.cover} />
            </div>
            <div className='card-block'>
              <div className="card-block-content">
                <h4 className='card-title'>{props.course.title}</h4>
                <p className='card-text'>
                  <FontAwesomeIcon className="icon" icon={faUser} />
                  <span>Instructor:</span> {props.course.author}
                </p>
                <p className="price">
                  <span>Price:</span> ${props.course.currentPrice}
                  <span><strike className="red-text">${props.course.previousPrice}</strike></span>
                </p>
                <p>
                  <span>Rating:</span> {props.course.rating}
                  <FontAwesomeIcon className="icon" icon={faStarHalfAlt} />
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faUsers} />
                  <span>{props.course.enrolledStudents}</span> &nbsp;
                  students are already enroled
                </p>
                <span className='product-discount-label'> {props.course.descountPercent}% OFF</span>
                <button onClick={() => props.handleAddCourse(props.course)} className="btn btn-primary">Enroll Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;