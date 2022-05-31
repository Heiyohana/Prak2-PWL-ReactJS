import React, {useState} from 'react';
import './about.css';

import { Container, Col, Row } from 'reactstrap';
import aboutImg from '../../assets/Mia.png';

import Education from './education';
import Skills from './skills';

const About = () => {

    const [aboutFilter, setAboutFilter] = useState('ABOUT')

  return <section id='about'>
      <Container>
        <Row>
            <Col lg='10' className='mb-3'>
                <h3>About Me</h3>
            </Col>

            <Col lg='4' md='3'>
                <div className='about-btns d-flex flex-column align-items-center'>
                    <button className={`about-btn ${aboutFilter === 'ABOUT' ? 'about-btn-active' : ''}`} 
                            onClick={()=>setAboutFilter('ABOUT')}>About Me</button>
                    <button className='about-btn' onClick={()=>setAboutFilter('EDUCATION')}>Education</button>
                    <button className='about-btn' onClick={()=>setAboutFilter('SKILLS')}>Skills</button>
                </div>
            </Col>

            <Col lg='8' md='9'>
                {
                    aboutFilter === 'ABOUT' && <div className='about-content-wrapper d-flex gap-5'>
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
                                <a href='https://www.facebook.com/profile.php?id=100004364475211'>
                                    <i class="ri-facebook-circle-fill"></i>
                                </a>
                            </span>
                            <span>
                                <a href='https://www.instagram.com/hendamiayohana/'>
                                    <i class="ri-instagram-fill"></i>
                                </a>
                            </span>
                            <span>
                                <a href='https://github.com/Heiyohana/'>
                                    <i class="ri-github-fill"></i>
                                </a>
                            </span>
                            <span>
                                <a href='https://www.linkedin.com/in/hendamia-yohana-sembiring-7673b5174/'>
                                    <i class="ri-linkedin-fill"></i>
                                </a>
                            </span>
                        </div>
                    </div>

                </div>
                }

                {
                    aboutFilter === 'EDUCATION' && <Education />
                }

                {
                    aboutFilter === 'SKILLS' && <Skills />
                }
            </Col>
        </Row>
      </Container>
  </section>
}

export default About;