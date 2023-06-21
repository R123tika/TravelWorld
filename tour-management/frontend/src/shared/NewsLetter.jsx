import React from 'react'
import './NewsLetter.css'
import {Container,Row ,Col} from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const NewsLetter = () => {
  return (
    <section className='newsletter'>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="newsletter__content">
                        <h2>Subscribe now to get useful travelling information.</h2>
                        <div className='newsletter__input'>
                            <input type="email" placeholder='Enter your Email' />
                            <button className="btn newsletter__btn">Subscribe</button>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptas necessitatibus? Tempora labore, illum cumque saepe obcaecati excepturi, officiis sequi explicabo, tenetur rem velit atque?</p>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className="newsletter__img">
                        <img src={maleTourist} alt="loading.." />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default NewsLetter