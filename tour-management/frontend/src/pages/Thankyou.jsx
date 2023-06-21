import React  from 'react'
import {Container,Row,Col,Button} from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/thankyou.css'

const Thankyou =() => {
  return (
    <Container>
        <Row>
            <Col lg='12' className='pt-5 text-center'>
                <div className="thank__you mt-5">
                    <span><i class='ri-checkbox-circle-line'></i></span>
                    <h1 className="mb-3 fw-semibold">Thank You</h1>
                    <h3 className='mb-4'>Your Tour is booked</h3>
                    <Button className='btn primary__btn w-25'>
                      <Link to='/home'>Back to Home</Link>
                    </Button>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Thankyou