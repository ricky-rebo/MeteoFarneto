import { Link } from 'gatsby';
import { MDBCol, MDBRow } from 'mdbreact';
import React from 'react';
import Layout from '../components/layout';
import { sat24Url, satelliteEurope, satelliteItaly } from '../shared/externals';
import './satellite.css'

const SatellitePage = ({ location }) => {
    return (
        <Layout location={location}>
            <MDBRow>
                <MDBCol middle md="6">
                    <a href={sat24Url}>
                        <img src={satelliteItaly} className="satImg" />
                    </a>
                </MDBCol>
                <MDBCol middle md="6">
                    <a href={sat24Url}>
                        <img src={satelliteEurope} className="satImg" />
                    </a>
                </MDBCol>
            </MDBRow>
        </Layout> 
    );
}

export default SatellitePage;