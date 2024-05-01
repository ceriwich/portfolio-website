import React from 'react';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import PersonalProjects from './components/personalprojects/PersonalProjects'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'

function App(){
    return (
        <>
            <Header/>
            <Nav/>
            <About/>
            <Experience/>
            <PersonalProjects/>
            <Contacts/>
            <Footer/>
        </>
    );
}

export default App;