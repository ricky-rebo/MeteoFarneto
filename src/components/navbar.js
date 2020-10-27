import React, { Component } from "react";
import {
  MDBContainer, MDBNavbar,  MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, 
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import logoImage from "../images/new_logo.png";
import headerImage from "../images/header.jpg";

class NavbarPage extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  }

  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { title, links, socials, location } = this.props;

    return (
      <>
        <div className="d-none d-md-block">
          <img className="fluid" src={headerImage} width="100%" />
        </div>
        
        <MDBNavbar dark expand="md" className="sticky-top">
          <MDBContainer>
            <img src={logoImage} width="50" />
            <Link to="/" className="navbar-brand d-block d-md-none">
              <strong className="ml-3 white-text">{title}</strong>
            </Link>
            <MDBNavbarToggler name="navbar-toggler" onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav left className="ml-3">
                { 
                  links.map(item => {
                    if(item.type == 'dropdown') {
                      return (
                        <MDBNavItem key={item.name + "_dropdown"}>
                          <MDBDropdown>
                            <MDBDropdownToggle nav caret>
                              <div className="d-inline">{item.name}</div>
                            </MDBDropdownToggle>
                            <MDBDropdownMenu key={item.name + "_link"}>
                              {item.items.map(link => <MDBDropdownItem key={link.name + "_link"} href={link.url} active={location.pathname === link.url}>{link.name}</MDBDropdownItem>)}
                            </MDBDropdownMenu>
                          </MDBDropdown>
                        </MDBNavItem>
                      )
                    }
                    else 
                      return(
                        <MDBNavItem key={item.name + "_link"} active={(location.pathname === item.url) && (item.url !== "/")}>
                          <Link to={item.url} className="nav-link"> {item.name} </Link>
                        </MDBNavItem>
                          
                      )
                  })
                }
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <div className="d-flex align-items-center">
                  {
                    socials.map(item => (
                      <MDBNavItem key={item.name + "_link"} active={location.pathname === item.url}>
                        <Link to={item.url} className="nav-link"> 
                          <MDBIcon fab icon={item.icon} className="ml-1" />
                        </Link>
                      </MDBNavItem>
                    ))
                  }
                </div>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </>
    );
  }
}

export default NavbarPage;
