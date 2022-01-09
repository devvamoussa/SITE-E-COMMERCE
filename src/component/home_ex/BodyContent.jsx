import React from 'react';
import hommes from '../img/image/hommes.png';
import femmes from '../img/image/femme.png';
import Accessoires from '../img/image/chapeau.png';
import '../css/home/bodyContent.css'
import ContentArticle from './ContentArticle';

function BodyContent() {
    return (
        <div>
            <div className="content-card">
                <div className="card--1">
                    <div className="card--p">
                        <p>Hommes</p>
                    </div>
                    <div className="card--1-img">
                        <img src={ hommes }alt="homme imge" />
                    </div>
                </div>
                <div className="card--1">
                    <div className="card--p">
                        <p>Femmes</p>
                    </div>
                    <div className="card--1-img">
                        <img src={ femmes } alt="femme image" />
                    </div>
                </div>
                <div className="card--1">
                    <div className="card--p">
                        <p>Accessoires</p>
                    </div>
                    <div className="card--3-img">
                        <img src={Accessoires} alt="chapeau image" />
                    </div>
                </div>

            </div>
            <ContentArticle />
            
        </div>
    )
}

export default BodyContent
