import { useState } from 'react';
import { AiOutlineGooglePlus } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import "../css/connexion.css"


const Connexion = ( { className }) => {

    const [toggle, setToggle] = useState(false);
    
    return (
        <div className="navigation--top__items--btns">
            <div className="modal-btn-inscription">
                <button className="btn--blue"
                    type="button" 
                    onClick={(e) => setToggle(!toggle)}
                    >
                        connexion
                </button>
                <div className={ toggle ? "show" : "overlay" } id="overlay">
                    <div className="body-modal">
                        <div className="modal-content">
                            <div>
                                <div className="en-tete">
                                    <h6 className="modal-title" id="Inscritpion">connexion</h6>
                                    <div>
                                        <button 
                                            type="button"
                                            className="btn--supprime"
                                            onClick={(e) => setToggle(!toggle)}
                                            >
                                            x
                                        </button>
                                    </div>
                                </div>
                                <div className="link-connection">
                                    <p>vous n'avez pas de compte ? <span>inscrivez-vous</span></p>
                                </div>
                                <div className="icone-connection">
                                    <div className="icone">
                                        <div className="icone-white">
                                            <span><i><AiOutlineGooglePlus/></i>Connexion avec google</span>
                                        </div>
                                    </div>
                                    <div className="icone">
                                        <div className="icone-blue">
                                            <span><i><FaFacebookF/></i>connexion avec facebook</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="icone-ou"><p>ou</p></div>
                                <div className="input-content">
                                    <div><input type="text" placeholder="  Adresse email"/></div>
                                    <div><input type="text" placeholder="  Mot de passe"/></div>
                                    <div className="btn-inscription">
                                        <button>Connexion</button>
                                        
                                        <div className="mot-de-passe"><p>Mot de passe oublié</p></div>
                                    </div>
                                    
                                </div>
                            </div>        
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default Connexion;