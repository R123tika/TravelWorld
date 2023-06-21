import React from "react"
import '../styles/home.css'
import {Row,Container,Col} from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero.mp4'
import worldImg from '../assets/images/world.png'
import NewsLetter from "../shared/NewsLetter"
import Subtitle from '../shared/Subtitle';
import Testimonial from "../Components/Testimonial/Testimonial"
import { SearchBar } from "../shared/SearchBar"
import experience from '../assets/images/experience.png'
import MasonryImagesGallery from "../Components/Image-gallery/MasonryImagesGallery"
import { ServiceList } from "../services/ServiceList"
import FeatureTourList from "../Components/Featue-tour/FeatureTourList.jsx"
const Home =()=>{
    return (<>
            <section>
                <Container>
                    <Row>
                        <Col lg ='6'>
                            <div className="hero__content">
                                <div className="hero__subtitle d-flex align-item-center">
                                    <Subtitle subtitle={'know before you go'}/>
                                    <img src={worldImg} alt="loading.."/>
                                </div>
                                <h1>Traveling opens the door to creating <span className="highlight">memories</span></h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, blanditiis libero quam corporis deserunt voluptate in deleniti officia beatae nostrum amet magnam, sed quae molestiae ratione neque. Nostrum, praesentium quos!

                                </p>
                                
                            </div>

                        </Col>
                        <Col lg='2'>
                            <div className="hero__img-box">
                                <img src={heroImg} alt="loading.."></img>
                            </div>
                        </Col>
                        <Col lg='2'>
                            <div className="hero__img-box hero__video-box mt-4">
                                <video src={heroVideo} alt="loading.." controls></video>
                            </div>
                        </Col>
                        <Col lg='2'>
                            <div className="hero__img-box mt-5">
                                <img src={heroImg02} alt="loading.."></img>
                            </div>
                        </Col>
                    </Row>
                        <SearchBar/>        
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col lg='3'>
                            <h5 className="services__subtitle">What We Serve</h5>
                            <h2 className="services__title">We offer Our Best Services</h2>
                        </Col>
                        <ServiceList/>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col lg='12' className="mb-5">
                            <Subtitle subtitle={'Explore'}/>
                            <h2 className="featured__tour-title">Our Feature Tours</h2>
                        </Col>
                        <FeatureTourList/>
                    </Row>
                </Container>
            </section>
            {/* Experience */}
            <section>
                <Container>
                    <Row>
                        <Col lg='6'>
                        <div className="experience__content">
                            <Subtitle subtitle={'Experience'}/>
                                <h2>With our all experience <br />We will Serve you</h2>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing
                                <br/> Dolorem, laborum? Lorem ipsum dolor sit.</p>
                        </div>
                        <div className="counter__wrapper d-flex align-items-center gap-5">
                            <div className="counter__box">
                                <span>12K+</span>
                                <h6>Successfull Trip</h6>
                            </div>
                            <div className="counter__box">
                                <span>2k+</span>
                                <h6>Regular Customer</h6>
                            </div>
                            <div className="counter__box">
                                <span>11</span>
                                <h6>Year Experience</h6>
                            </div>
                        </div>
                        </Col>
                        <Col lg='6'>
                            <div className="experience__img">
                                <img src={experience} alt="loading..." />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* gallery Section */}
            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <Subtitle subtitle={'Gallery'}></Subtitle>
                            <h2 className="gallery__title">Visit our Customers tour gallery
                            </h2>
                        </Col>
                        <Col lg='12'>
                            <MasonryImagesGallery/>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Testimony */}
            <section>
                <Container>
                    <Row>
                        <Col lg ='12'>
                            <Subtitle subtitle={'Fan Page'}/>
                            <h2 className="testimonial__title">What our Fan says about us</h2>
                        </Col>
                        <Col lg='12'>
                            <Testimonial/>
                        </Col>
                    </Row>
                </Container>
            </section>
            <NewsLetter/>
        </>

        
    )
}
export default Home;