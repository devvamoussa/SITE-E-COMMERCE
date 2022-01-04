import React from 'react'
import Body from '../component/Body'
import Footer from '../component/Footer'
import Nav from '../component/Nav'
import Panier from '../component/Panier'

function Vetements() {
    return (
        <div>
            <Panier/>
            <Nav/>
            <Body/>
            <Footer/>
        </div>
    )
}

export default Vetements
