import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div>
        <Image src="assets/dog-people.jpg" className="header-image" />
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <Image src="assets/person-1.jpg" className="about-profile-pic" rounded />
            <h3>Lorem ipsum dolor.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus dolorem debitis id nihil tenetur consectetur a fugiat officia excepturi culpa, et fugit nam magnam recusandae tempore voluptatem quam, cum modi sunt omnis provident? Mollitia unde reiciendis autem sapiente alias soluta nostrum, aliquid eveniet magni. Repellat sed optio dignissimos nam fugiat nulla, cum enim harum eligendi ullam autem tempore dolor sint, officiis reprehenderit vero sunt saepe! Recusandae similique autem dolor ex et officiis, error facere odio, itaque quibusdam inventore animi quam.</p>
          </Col>
        </Grid>
      </div>
    )
  }
}