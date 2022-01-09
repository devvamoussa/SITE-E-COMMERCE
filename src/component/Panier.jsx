import React from 'react'
import "./css/Panier.css"
import jupe from "./img/jupe.png"
import { useState } from 'react';
import { MdShoppingBag } from 'react-icons/md'

export default function Panier() {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className={ toggle ? "show" : "overlay" } id="overlay">
                <div className= "container-panier" >
                    <div className="header">
                        <span><i></i> Articles</span>
                        <div className="header-p">
                            <p
                                onClick={(e) => setToggle(!toggle)}
                            >X</p>
                        </div>
                        
                    </div>
                    <div className="body">
                        <div className="compteur">
                            <p>+</p>
                            <p>1</p>
                            <p>-</p>
                        </div>
                        <div className="article">
                            <div className="image">
                                <img src={jupe} alt="jupe" />
                            </div>
                            <div className="detailes-img">
                                <div className="detailes">
                                    <div className="name-article">
                                        <h7>Jupe volante</h7>
                                    </div>
                                    <div className="article-price"><span>2000 F</span></div>
                                    
                                </div>
                                <div className="quantity">
                                    <span>3 Unités</span>
                                </div>
                            </div>
                        </div>
                        <div className="delect">
                            <p>X</p>
                        </div>
                    </div>

                    <div className="footer">
                        <div>
                            <div className="info">
                                <span>Vous-avez un coupon ?</span>
                            </div>
                            <div className="price">
                                <span>mon panier</span><input type="text" placeholder="10002000frs"/>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
                <div className={ toggle ? "container-none" :"panier-icone" }>
                                <div className="shoping">
                                    <i type="button" 
                                    onClick={(e) => setToggle(!toggle)}
                                    >
                                        <div >
                                            <i><MdShoppingBag className="shoping-icon" /></i>
                                        </div>
                                    </i>
                                </div>
                        
                </div>
        </>
    )
}
