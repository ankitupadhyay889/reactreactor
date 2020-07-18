import React from 'react';
import web from "./web.jpg";
import Commen from "./Commen";

const About = () => {
    return (
        <>
            <Commen name="Welcome to About page" imgsrc={web} visit="/contact" btname="Contact Now" />
        </>
    );
};

export default About;