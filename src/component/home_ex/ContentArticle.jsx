import React from 'react';
import '../css/home/contentArticle.css'

function ContentArticle() {
    return (
        <div>
            <div className="content-article">
                <div className="content-left">
                    <div className="info-top">
                        <h5>Nouvel arrivage</h5>
                    </div>
                    <div className="info-bottom">
                        <h5>Top ventes</h5>
                    </div>

                </div>
                <div className="content-right">
                    <div className="btn-plus-article">
                        <button>Voir plus</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentArticle
