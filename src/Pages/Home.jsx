import React from 'react';
import NavBar from '../Components/NavBar';
import Banner from '../Components/Banner';
import AboutMe from '../Components/AboutMe';
import Skills from '../Components/Skills';
import Projects from '../Components/Projects';
import Education from '../Components/Education';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Projects></Projects>
            <Education></Education>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;