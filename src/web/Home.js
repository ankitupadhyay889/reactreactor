import React from 'react';
import web from "./web.jpg";
// import { NavLink } from 'react-router-dom';
import Commen from "./Commen";


const Home = () => {
    return (
        <>
            <Commen name="Grow your business with" imgsrc={web} visit="/services" btname="Get Started" />
        </>
    );
};

export default Home;