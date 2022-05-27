import React from 'react'
import './hero-section.css';

import { Container, Row, Col } from 'reactstrap';

import heroImg from '../../assets/fotoku.png';

const HeroSection = () => {
  return (
  <section className='hero-section' id='home'>
      <Container>
          <Row>
              <Col lg='6' md='6'>
                  <div className='hero-content'>
                    <p>Welcome to My Portofolio</p>
                    <h5>Hi</h5>
                    <h2 className='hero-title'>I'm <span>Hendamia Yohana Sembiring</span></h2>
                    <p>Saya merupakan seorang mahasiswa di Institut Teknologi Sumatera
                    program studi Teknik Informatika.</p>

                    <div className='hero-btns d-flex align-items-center gap-4'>
                        <button className='btn'><a href='#'>Hire Me</a></button>
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