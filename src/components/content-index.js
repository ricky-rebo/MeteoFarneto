import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { 
    MDBNavbar, MDBContainer, MDBNavbarBrand, MDBNavbarNav,
    MDBNavItem, MDBCollapse, MDBNavbarToggler
} from 'mdbreact';

class Index extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false
    }

    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <MDBNavbar style={{ marginTop: '20px' }} light>
        <MDBContainer>
            <MDBNavbarBrand> Indice </MDBNavbarBrand>
            <MDBNavbarToggler color="#d3531a" id="hamburger1" onClick={this.toggleCollapse} />
            <MDBCollapse isOpen={this.state.isOpen} navbar>
                <MDBNavbarNav left>
                  {
                    this.props.items.map(item => (
                      <MDBNavItem key={item.url}>
                        <a href={item.url} onClick={this.toggleCollapse}> {item.name} </a>
                      </MDBNavItem>
                    ))
                  }
                </MDBNavbarNav>
            </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    );
  }
}

Index.propTypes = {
  items: PropTypes.array.isRequired
}

export default Index;