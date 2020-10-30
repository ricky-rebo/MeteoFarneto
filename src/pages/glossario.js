import React from 'react';;
import { MDBMedia } from 'mdbreact';
import glossary from "../shared/glossary_data.json";
import Layout from '../components/layout';
import Index from '../components/content-index';
import ScrollToTopButton from '../components/scrollToTopBtn';

const capitalize = str => str[0] + str.substring(1).toLowerCase()
const strip = str => str.replace(/,| /gi, '_').toLowerCase()

const indexItems = glossary.map(item => {
        return { name: capitalize(item.name), url: '#' + strip(item.name) }
    })

const GlossaryPage = () => {
    

    return (
        <Layout location={location}>
            <ScrollToTopButton />

            <Index items={indexItems} />

            <MDBMedia list className="mt-3">
                {
                    glossary.map(item => (
                        <MDBMedia key={item.name} tag="li" className="mb-2 mt-2" id={strip(item.name)}>
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