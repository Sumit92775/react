import React from 'react';
import Layout from './Layout';
import './../Styles/page.css' 

const Page = () =>{
    return(
        <Layout>
            <div className="grid-container">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>
        </Layout>
    )
}

export default Page;