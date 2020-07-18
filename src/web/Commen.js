import React from 'react';

import web from "./web.jpg";
import { NavLink } from 'react-router-dom';


const Commen = (props) => {
    return (
        <>
        <div className="home">
            <div className="h">
                <h1>
                    {props.name} <br/> <strong className="m">Ankit Upadhyay </strong>
                </h1>
                <p>
                    We are the team of talented developer making websites....
                </p>

                <div className="mt-3">
                    <NavLink to={props.visit} className="btn btn-info"> {props.btname} </NavLink>
                </div>
            </div>

            <div className="mx-5">
                <img className="img-fluid animated" src={web} alt="pic"/>
            </div>

        </div>  

        <footer class="al">
        {/* <p id="p" class="float-right"><a href="#">Back to top</a></p> */}
        <p className="float-left">© 2020-2021 AnkitTech, Inc.</p>
        </footer>

      </>            
    );
};

export default Commen;