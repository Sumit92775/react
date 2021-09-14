import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import './../Styles/layout.css'
import './page'


const Layout = ({children}) =>{
    return(
        <div className="container">
            <div className="header-container">
                <Header></Header>
            </div>
            <div className="main-container">
                <div className="sidebar-container">
                    <Sidebar></Sidebar>
                </div>
                <div className="main-content-container">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout;