import React from 'react';

import aw from "./aw.jpg";
import add from "./add.jpg";
import ae from "./ae.jpg";
import t from "./t.jpg";

const Card = () => {
    return (
        <>
        <div className="container">
        <div className="row row-cols-1 row-cols-md-2">
            <div className="col mb-4">
                <div className="card">
                <img src={aw} class="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Web Development</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                </div>
            </div>
            <div className="col mb-4">
                <div className="card">
                <img src={add} class="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Web Desing</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                </div>
            </div>
            <div className="col mb-4">
                <div className="card">
                <img src={ae} class="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"> Developer </h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
                </div>
            </div>
            <div className="col mb-4">
                <div className="card">
                <img src={t} class="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"> MERN Stack</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                </div>
            </div>
        </div>
        </div>
        
        </>
    );
};

export default Card;