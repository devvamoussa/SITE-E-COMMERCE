import React from 'react';
import Nav from '../component/Nav';
import Panier from '../component/Panier';
import BodyHome from '../component/home_ex/BodyHome';
import BodyContent from '../component/home_ex/BodyContent';

function Home() {
    return (
        <div>
            <Nav />
            <Panier />
            <BodyHome />
            <BodyContent />
        </div>
    )
}

export default Home
