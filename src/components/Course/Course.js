import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardDeck } from 'react-bootstrap';
import './Course.css';

const Course = (props) => {
  console.log(props);
  return (
    <div>
      {/* <CardDeck>
        <Card className="nice-card">
          <div>
          <Card.Img variant="top" src={props.course.cover}/>
          </div>
          <div>
          <Card.Body>
            <Card.Title>{props.course.title}</Card.Title>
            <Card.Text>
              <p>Instructor: {props.course.author}</p>
              <p>Price: ${props.course.currentPrice}  <span><strike>${props.course.previousPrice}</strike></span></p>
              <p>{props.course.enrolledStudents} students are already enroled</p>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
          </div>
        </Card>
      </CardDeck> */}

      <div className="card-container">
        <div className="card-wrap">
          <div className='card'>
            <div className='card-img-top'>
              <img alt='' className='img-fluid' src={props.course.cover} />
            </div>
            <div className='card-block'>
              <div className="card-block-content">
                <h4 className='card-title'>{props.course.title}</h4>
                <p className='card-text'>Instructoe: {props.course.author}</p>
                <p className="price">Price: ${props.course.currentPrice}  <span><strike>${props.course.previousPrice}</strike></span></p>
                <p>{props.course.enrolledStudents} students are already enroled</p>
                <span className='product-discount-label'> {props.course.descountPercent}% OFF</span>
                <button onClick={() => props.handleAddCourse(props.course)} className="btn btn-primary">Enrolled Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;