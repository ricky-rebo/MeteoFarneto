import React, { Component } from "react";
import {
  MDBContainer, MDBNavbar,  MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import { Link } from 'gatsby';
import CustomNavLink from './customLink';
import { ReactComponent as Logo } from "../images/light-bulb.svg";

class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { title, links, socials } = this.props;

    return (
      <MDBNavbar color="indigo" dark expand="md">
        <MDBContainer>
          <Logo  />
          <Link to="/" className="navbar-brand">
            <strong className="ml-3 white-text">{title}</strong></Link>
          <MDBNavbarToggler name="navbar-toggler" onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              { 
                links.map(item => {
                  console.log(item.type);
                  if(item.type == 'dropdown') {
                    return (
                      <MDBNavItem key={item.name + "_dropdown"}>
                        <MDBDropdown>
                          <MDBDropdownToggle nav caret>
                            <div className="d-inline">{item.name}</div>
                          </MDBDropdownToggle>
                          <MDBDropdownMenu key={item.name + "_link"}>
                            {item.items.map(link => <MDBDropdownItem key={link.name + "_link"} href={link.url}>{link.name}</MDBDropdownItem>)}
                          </MDBDropdownMenu>
                        </MDBDropdown>
                      </MDBNavItem>
                    )
                  }
                  else 
                    return(<CustomNavLink key={item.name + "_link"} to={item.url}>{item.name}</CustomNavLink>)
                })
              }
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <div className="d-flex align-items-center">
                {
                  socials.map(item => (
                    <CustomNavLink key={item.icon + "_link"} to={item.url}>
                      <MDBIcon fab icon={item.icon} className="ml-1" />
                    </CustomNavLink>
                  ))
                }
              </div>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;
