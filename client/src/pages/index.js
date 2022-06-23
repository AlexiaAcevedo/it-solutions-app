import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Info from '../components/Info';
import { homeObjOne } from '../components/Info/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';
import Careers from '../components/Careers';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <Hero />
        <Info {...homeObjOne} />
        <Services />
        <Careers />
        <Footer />
    </>
    )
}

export default Home