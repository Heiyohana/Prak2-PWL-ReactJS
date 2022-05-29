import React from 'react';
import './about.css';

import { Container, Col, Row } from 'reactstrap';
import aboutImg from '../../assets/Mia.png';

const About = () => {
  return <section id='about'>
      <Container>
        <Row>
            <Col lg='10' className='mb-3'>
                <h3>About Me</h3>
            </Col>

            <Col lg='4' md='3'>
                <div className='about-btns d-flex flex-column align-items-center'>
                    <button className='about-btn about-btn-active'>About Me</button>
                    <button className='about-btn'>Education</button>
                    <button className='about-btn'>Skills</button>
                </div>
            </Col>

            <Col lg='8' md='9'>
                <div className='about-content-wrapper d-flex gap-5'>
                    <div className='about-img w-25'>
                        <img src={aboutImg} alt='' className='w-100'/>
                    </div>

                    <div className='about-content w-75'>
                        <h2>I'm Hendamia Yohana Sembiring</h2>
                        <p>I am a student at the Sumatra Institute of Technology, Informatics Engineering study program. 
                        I am a student who is quite active in several organizations and is very responsible. I am interested 
                        in Web Developer, Ui/ux Designer and Graphic Designer.</p>

                        <div className='social-links'>
                            <h6 className='mb-1'>Connect with me:</h6>
                            <span>
                                <a href='/'>
                                    <i class="ri-facebook-circle-fill"></i>
                                </a>
                            </span>
                            <span>
                                <a href='/'>
                                    <i class="ri-instagram-fill"></i>
                                </a>
                            </span>
                            <span>
                                <a href='/'>
                                    <i class="ri-github-fill"></i>
                                </a>
                            </span>
                            <span>
                                <a href='/'>
                                    <i class="ri-linkedin-fill"></i>
                                </a>
                            </span>
                        </div>
                    </div>

                </div>
            </Col>
        </Row>
      </Container>
  </section>
}

export default About;