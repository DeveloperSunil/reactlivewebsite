import React from 'react';
import Common from './Common';
import Web from '../src/images/developer.jpg';
const About = () =>{
    return(<>
        <Common name="Welcome to About page" imgsrc={Web} visit="/contact" btname="Contact Now"/>
    </>);
}
export default About;