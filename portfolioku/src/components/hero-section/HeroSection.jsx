import React, {useRef, useEffect} from 'react';
import './hero-section.css';

import { init } from 'ityped';

import { Container, Row, Col } from 'reactstrap';

import heroImg from '../../assets/Mia.png';

const HeroSection = () => {
  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current, {
        backDelay: 1500,
        showCursor: true,
        strings:[
            'Hendamia Yohana',
            'a Web Developer',
            'a College Student'
        ]
    })
  }, [])

  return (
  <section className='hero-section' id='home'>
      <Container>
          <Row>
              <Col lg='6' md='6'>
                  <div className='hero-content'>
                    <p className='mb-3'>Hi, Everybody!</p>
                    <h2 className='hero-title mb-4'>
                        I'm <span ref={textRef}></span>
                    </h2>
                    <p>I am a student at the Sumatra Institute of Technology, Informatics Engineering study program. 
                    I am a student who is quite active in several organizations and is very responsible. I am interested 
                    in Web Developer, Ui/ux Designer and Graphic Designer.</p>

                    <div className='mt-5 hero-btns d-flex align-items-center gap-4'>
                        <button className='hire-btn'><a href='/'>Hire Me</a></button>
                        <button className='btn'>Contact</button>
                    </div>
                  </div>
              </Col>

              <Col lg='6' md='6'>
                <div className='hero-img'>
                    <img src={heroImg} alt='' className='w-50'/>
                </div>
              </Col>
          </Row>
      </Container>
  </section>
  )
}

export default HeroSection