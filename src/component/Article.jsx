import React from 'react'
import "./css/Article.css"
import article from "./img/jupe.png"
import Panier from './Panier'



export default function Article() {
    return (
        <>
            <div className="container card--product">
                <div className="article-image">
                    <img src={article} alt="jupe" />
                </div>
                <div className="description-article">
                    <h3>jupe volante</h3>
                    <div className="description">
                        <p><strong>3500 F</strong> / unité</p>
                        <p><strong>1500 F</strong> / a partir de 5 unité</p>
                    </div>
                </div>
                <div className="article-description-btn">
                    <div className="btn-acheter">
                        <a href="details--articles.html"><button>Achetez</button></a>
                    </div>
                    <div className="btn-plus">
                        +
                    </div>
                </div>
            </div>
        </>
    )
}
