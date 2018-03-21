import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>Welcome to CodeLife</h2>
          <p>This is how to build a website with React, React-Router & React-Bootstrap</p>
          <Link to="/about">
            <Button bsStyle="primary">Learn More</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-1.jpg" circle className="profile-pic"/>
            <h3>Lorem ipsum.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium atque necessitatibus, sed velit doloremque, optio quas. Cupiditate doloribus architecto maiores.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-1.jpg" circle className="profile-pic"/>
            <h3>Lorem ipsum.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quis accusamus alias obcaecati quo perspiciatis ea ipsam, explicabo placeat officiis.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-1.jpg" circle className="profile-pic"/>
            <h3>Lorem ipsum.</h3>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas labore ratione, fugit aperiam quo vitae sunt neque delectus eligendi tenetur?
           </p>
          </Col>
        </Row>
      </Grid>
    )
  }
}