import React from 'react';
import { MDBMedia } from 'mdbreact';
import glossary from "../../content/glossary_data.json";
import Layout from '../components/layout';

const GlossaryPage = ({ location }) => {
    return (
        <Layout location={location}>
            <MDBMedia list className="mt-3">
                {
                    glossary.map(item => (
                        <MDBMedia key={item.name} tag="li" className="mb-2 mt-2">
                            <MDBMedia body>
                                <MDBMedia heading> { item.name } </MDBMedia>
                                { item.description }
                                <hr />
                            </MDBMedia>
                        </MDBMedia>
                    ))
                }
            </MDBMedia>
        </Layout>
            
    )
}

export default GlossaryPage;