import { useState } from 'react';
// import { AiOutlineGooglePlus } from 'react-icons/ai'
// import { FaFacebookF } from 'react-icons/fa'
import "../css/Inscription.css"

const Inscritpion = ( { className }) => {

    const [toggle, setToggle] = useState(false);

    return (
        <div className="modal-btn-inscription">
            <button className="btn--blue"
                type="button" 
                onClick={(e) => setToggle(!toggle)}
                >
                    Inscription
            </button>
            
            <div className={ toggle ? "show" : "overlay" } id="overlay">
                <div className="body-modal">
                    <div className="modal-content">
                        <div>
                            <div className="en-tete">
                                <h6 className="modal-title" id="Inscritpion">Inscription</h6>
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
                                <p>vous avez un compte ? <span>connectez-vous</span></p>
                            </div>
                            <div className="icone-connection">
                                <div className="icone">
                                    <div className="icone-white">
                                        <span><i></i>s'inscrire avec google</span>
                                    </div>
                                </div>
                                <div className="icone">
                                    <div className="icone-blue">
                                        <span><i></i>s'inscrire avec facebook</span>
                                    </div>
                                </div>
                            </div>
                            <div className="icone-ou"><p>ou</p></div>
                            <div className="input-content">
                                <div><input type="text" placeholder="  Prénom"/></div>
                                <div><input type="text" placeholder="  Nom"/></div>
                                <div><input type="text" placeholder="  Adresse email"/></div>
                                <div><input type="text" placeholder="  Mot de passe"/></div>
                                <div className="localisation--content">
                                    <select name="pays" id="select-language">
                                        <option value="opt1">Pays</option>
                                        <option value="opt1">Côte d'ivoire</option>
                                        <option value="opt1">France</option>
                                        <option value="opt1">USA</option>
                                    </select>
                                </div>
                                <div className="localisation--content-2">  
                                    <select name="ville" id="select-language">
                                        <option value="opt1">Ville</option>
                                        <option value="opt1">Abidjan</option>
                                        <option value="opt1">Yamoussoukro</option>
                                    </select>
                                </div>
                                <div className="btn-inscription">
                                    <button>S'inscrire</button>
                                </div>
                            </div>
                            
                        </div>        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inscritpion ;