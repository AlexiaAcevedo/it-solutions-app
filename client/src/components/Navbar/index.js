import React, { useEffect, useState } from 'react';
import {FaBars} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { IconContext } from "react-icons";
import image from '../../images/logo.svg';
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon,
    NavMenu, 
    NavItem,
    NavLinks,
    Img,
    } from './NavbarElements';


const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                        <Img src={image}/>
                    </NavLogo>
                    <IconContext.Provider value={{ color: "rgb(96, 187, 234)"}}>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                    </IconContext.Provider>
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                            to="about" 
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            to="services"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            to="careers"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}>Careers</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar