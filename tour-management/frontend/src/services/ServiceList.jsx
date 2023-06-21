import React from 'react'
import ServiceCard from './ServiceCard'
import {Col} from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'
const serviceData=[
    {
        imgUrl :weatherImg,
        title :"Calculate Weather",
        desc : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, unde."
      },
      {
        imgUrl :guideImg,
        title :"Best Tour to Guide",
        desc : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, unde."
      },
      {
        imgUrl :customizationImg,
        title :"Customization",
        desc : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, unde."
      },
]
export const ServiceList = () => {
  return(
  <>
    {
        serviceData.map((item,index)=>{
            return(<Col lg='3' md = '6' sm='12' className='mb-4' key={index}><ServiceCard item={item}/></Col>)
        })
    }
  </>
        )
}
