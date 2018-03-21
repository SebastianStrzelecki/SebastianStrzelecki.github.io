import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './News.css';

export default class News extends Component {
  render() {
    return (
      <div>
        <Image src="assets/mountain-man.jpg" className="header-image" />
        <Grid>
          <h2>News</h2>
          <Row>
            <Col xs={12} sm={8} className="main-section">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam eaque, unde fuga, dignissimos labore tempora impedit. Nesciunt expedita, omnis aspernatur delectus ipsa nisi excepturi, ratione quae odit eligendi placeat. Excepturi magnam odit eveniet temporibus, ratione fuga ullam sequi aliquid blanditiis illum quaerat nisi beatae voluptate quisquam incidunt harum voluptatum natus eius molestiae expedita dignissimos sit amet. Optio omnis, temporibus mollitia doloremque, laborum, unde quis sit labore placeat inventore quisquam itaque corporis voluptatibus accusamus. Maxime officiis dolores minus culpa, obcaecati voluptates perspiciatis officia quidem atque ducimus iste nemo facilis sapiente nesciunt in laboriosam voluptatum, suscipit odit deserunt est consequuntur. Modi, doloremque?</p>
            </Col>
            <Col xs={12} sm={4} className="sidebar-section">
              <Image src="assets/dog-people.jpg" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit inventore, unde, esse reprehenderit doloremque quasi similique labore explicabo veritatis, numquam facere recusandae. Eaque eius temporibus facilis consectetur, aliquam, vitae necessitatibus asperiores quam sed qui fuga in! Ratione dolorum illo sed, blanditiis nobis, hic numquam dolor maiores, nisi aspernatur possimus itaque!</p>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}