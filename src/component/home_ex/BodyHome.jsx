import React from 'react';
import "../css/home/bodyHome.css";
import homeImg  from '../img/image/2.png';

function BodyHome() {
    return (
        <div>
            <div className="container-card">
                <div className="info-home">
                    <div className="container-info">
                        <div className="detaile-home">
                            <h3>Bénéficiez de vos articles préférés<br />en gros et détailes </h3>
                        </div>
                        <div className="info-achat">
                            <p>Achetez et faite vous livrer vos colis en côte d'ivoire, au burkina faso, au liberia et<br /> en sierra leonne</p>
                        </div>
                        <div className="btn-home">
                            <button>Achetez maintenant</button>
                        </div>
                    </div>
                </div>
                <div className="image-home">
                    <img src={ homeImg } alt="image home" />
                </div>
            </div>
        </div>
    )
}

export default BodyHome
