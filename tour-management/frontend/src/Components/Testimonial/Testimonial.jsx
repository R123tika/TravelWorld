import React from 'react'
import Slider from 'react-slick'
import  ava01 from '../../assets/images/ava-1.jpg'
import  ava02 from '../../assets/images/ava-2.jpg'
import  ava03 from '../../assets/images/ava-3.jpg'


const Testimonial = () => {
    var settings = {
        dots: true,
        infinite: true,
        autoplay :true,
        speed: 600,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow: 3,
        responsive:[
            {
                breakpoint:992,
                settings : {
                    dots: true,
                    infinite: true,
                    slidesToScroll: 1,
                    slidesToShow: 2,
            }
        },{
            
            breakpoint:576,
            settings : {
                slidesToScroll: 1,
                slidesToShow: 1,
        }
        }
        ]
      };


  return (
    <Slider {...settings}>
        <div className="testimonial py-4 px-3">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis necessitatibus magnam enim voluptatum tenetur fuga, repellendus a adipisci nostrum dolor doloremque consequatur harum pariatur qui? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ad soluta sint voluptate eos repellat porro necessitatibus incidunt ea?</p>
            <div className="d-flex align-item-center gap-4 mt-3">
                <img src={ava01} alt="loading.." className='w-25 h-25 rounded-2'/>
            <div>
                    <h5 className="mb-0 mt-3">Joe Doe</h5>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis necessitatibus magnam enim voluptatum tenetur fuga, repellendus a adipisci nostrum dolor doloremque consequatur harum pariatur qui? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ad soluta sint voluptate eos repellat porro necessitatibus incidunt ea?</p>
            <div className="d-flex align-item-center gap-4 mt-3">
                <img src={ava02} alt="loading.." className='w-25 h-25 rounded-2'/>
                <div>
                    <h5 className="mb-0 mt-3">Lisa Frank</h5>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis necessitatibus magnam enim voluptatum tenetur fuga, repellendus a adipisci nostrum dolor doloremque consequatur harum pariatur qui? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ad soluta sint voluptate eos repellat porro necessitatibus incidunt ea?</p>
            <div className="d-flex align-item-center gap-4 mt-3">
                <img src={ava03}  alt="loading.." className='w-25 h-25 rounded-2'/>
                <div>
                    <h5 className="mb-0 mt-3">Yanky Frame</h5>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis necessitatibus magnam enim voluptatum tenetur fuga, repellendus a adipisci nostrum dolor doloremque consequatur harum pariatur qui? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ad soluta sint voluptate eos repellat porro necessitatibus incidunt ea?</p>
            <div className="d-flex align-item-center gap-4 mt-3">
                <img src={ava01} alt="loading.." className='w-25 h-25 rounded-2'/>
            <div>
                    <h5 className="mb-0 mt-3">Joe Doe</h5>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis necessitatibus magnam enim voluptatum tenetur fuga, repellendus a adipisci nostrum dolor doloremque consequatur harum pariatur qui? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ad soluta sint voluptate eos repellat porro necessitatibus incidunt ea?</p>
            <div className="d-flex align-item-center gap-4 mt-3">
                <img src={ava02} alt="loading.." className='w-25 h-25 rounded-2'/>
                <div>
                    <h5 className="mb-0 mt-3">Lisa Frank</h5>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis necessitatibus magnam enim voluptatum tenetur fuga, repellendus a adipisci nostrum dolor doloremque consequatur harum pariatur qui? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ad soluta sint voluptate eos repellat porro necessitatibus incidunt ea?</p>
            <div className="d-flex align-item-center gap-4 mt-3">
                <img src={ava03}  alt="loading.." className='w-25 h-25 rounded-2'/>
                <div>
                    <h5 className="mb-0 mt-3">Yanky Frame</h5>
                    <p>Customer</p>
                </div>
            </div>
        </div>
    </Slider>
  )
}

export default Testimonial