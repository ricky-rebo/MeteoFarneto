import React, { Component } from 'react';
import Layout from '../components/layout';
import AboutSection from '../components/aboutSection'
import { MDBCard, MDBCardText, MDBContainer, MDBRow } from 'mdbreact'

class Error404 extends Component {
  render() {
    return (
      <>
        <Layout>
          <main>
            <MDBContainer>
                <MDBCard>
                    <MDBCardText>Pagina non trovata!</MDBCardText>
                </MDBCard>
            </MDBContainer>
          </main>
        </Layout>
      </>
    );
  }
}

export default Error404;
