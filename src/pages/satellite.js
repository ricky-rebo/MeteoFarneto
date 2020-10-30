import { Link } from 'gatsby';
import { MDBCol, MDBRow } from 'mdbreact';
import React from 'react';
import Layout from '../components/layout';
import { sat24Url, satelliteEurope, satelliteItaly } from '../shared/externals';
import './satellite.css'

const SatellitePage = ({ location }) => {
    return (
        <Layout location={location}>
            <h1>Vista da Satellite</h1>
            <MDBRow>
                <MDBCol md="6">
                    <h3>Italia</h3>
                    <a href={sat24Url}>
                        <img src={satelliteItaly} className="satImg" />
                    </a>
                </MDBCol>
                <MDBCol size="12" className="d-block d-md-none"><hr /></MDBCol>
                <MDBCol md="6">
                    <h3>Europa</h3>
                    <a href={sat24Url}>
                        <img src={satelliteEurope} className="satImg" />
                    </a>
                </MDBCol>
            </MDBRow>
        </Layout> 
    );
}

export default SatellitePage;