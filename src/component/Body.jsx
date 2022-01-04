import React from 'react'
import "./css/Body.css"
import cover from "./img/Untitled-4.jpg"
import Article from './Article'
import { useState } from 'react';

export default function Body() {
    const [articles, setArticles] = useState([
        {},{},{},{},{},{},{},{},{},{},{},{}
    ])

    return (
        <>
            <div className="content--box">
                <div className="container">
                    <div className="content--image">
                        <div className="img-cover">
                            <img src={cover} alt="cover" />
                            <div className="header-shop__text">
                                <h3>Vêtements</h3>
                            </div>
                        </div>
                        
                    </div>
                    <div className="article-flex">
                        <div className="row">
                            {articles.map((article, i )=> 
                                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3" key={i}>
                                    <Article />
                                
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="d-flex justify-content-center button-voir-plus">
                        <button> Voir plus</button>
                    </div>
                </div>
            </div>
            
        </>
    )
}
