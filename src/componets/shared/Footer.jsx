import React from 'react'
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcDiscover, FaGithub, FaLinkedin } from 'react-icons/fa';
import './styles.css/Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_icons">
                <div className='footer_card'>
                    <FaCcVisa size={20} className="footer_icon" style={{ color: 'currentColor' }} />
                    <FaCcMastercard size={20} className="footer_icon" style={{ color: 'currentColor' }} />
                    <FaCcAmex size={20} className="footer_icon" />
                    <FaCcDiscover size={20} className="footer_icon" />
                </div>
                <div className='footer_my'>
                    <div className='footer_social'>
                        <a href="https://github.com/AvDesing" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={20} className="footer_icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/jairo-alejandro-velosa-bola%C3%B1os-879986270/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={20} className="footer_icon" />
                        </a>
                    </div>
                    <div className="footer_name">AvDesing</div>
                </div>
            </div>
        </footer>
    );
};


export default Footer