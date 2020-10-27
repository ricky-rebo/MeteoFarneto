import { MDBCol, MDBRow } from 'mdbreact';
import React from 'react';
import Layout from '../components/layout';
import WebcamImage from '../components/webcamImage';
import { webcamUrl, timelapsTodayUrl, timelapseYesterdayUrl } from '../shared/externals';

const WebcamPage = ({ location }) => {
    return (
        <Layout location={location}>
            <h1 className="txt-center">Webcam</h1>
            <MDBRow>
                <MDBCol>
                    <WebcamImage src={webcamUrl} interval={3*60*1000} />
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol sm="6">
                    
                </MDBCol>
                <MDBCol sm="6">
                    
                </MDBCol>
            </MDBRow>
        </Layout>
    );
}

export default WebcamPage;