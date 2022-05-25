import React from 'react';
import me1 from '../../images/me/ebrahim.jpg';
import './About.css'
const About = () => {
    return (
        
        <div className='container bg-style p-3'>
            <img className='my-img-style' src={me1} alt=""/><br/>       
            <h2>Created by : MD. Ibrahim Alli </h2>
            <p>HI.<br/> I am Ebrahim.<br/> I'm from Bangladesh.<br/> I am a web developer and graphic designer.<br/> My experience in 3 years of graphic design  now i'm start web development.<br/>I hope it's my long journey and my career.</p>
        </div>
    );
};

export default About;