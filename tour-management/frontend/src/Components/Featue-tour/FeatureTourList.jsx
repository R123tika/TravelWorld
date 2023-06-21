import React from 'react'

import tourData from '../../assets/data/tours.js'
import TourCard from '../../shared/TourCard.jsx'
import { Col } from 'reactstrap'
import useFetch from './../../hooks/usefetch.js'
import { BASE_URL } from './../../utils/config.js'



const FeatureTourList = () => {

const {data: featuredTours,loading,error} = useFetch(`${BASE_URL}/tours/search/getFeaturedTour`)

  
  return (<>
  {
    loading && <h4>Loading.............</h4>
  }
  {
    error && <h4>
      {error}
    </h4>
  }
    {!loading && !error && featuredTours?.map((tour)=>{
          return(
              <Col lg='3' md='4' sm='6' className='mb-4' key={tour._id}><TourCard tour={tour}/></Col>
            
        )})
    }
  </>
  )

}

export default FeatureTourList