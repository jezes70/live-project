import Button from '../Button/Button';
import './LandingPageFour.css';
 import React from 'react'

const LandingPageFour = () => {
  return (
    <div className='lpfourcontainer'>
      <h1 className='landingpagefourtitle'>Enjoy Privacy and Inclusivity</h1>
      <div className='landingpagefourparagraph'>
        <p className='p-landingpage4'>
        MindConnect is a social network for mental health. It is a digital platform designed to provide a safe and supportive community for people to share their mental health and experiences and connect with others going through similar challenges. The platform will allow users to learn more about their symptoms, share their stories and exchange tips to stay healthy.
        </p>
      </div>
      <div className="landingpagefourbutton">
        <Button width="185px" height="46px" backgroundColor="#175cd3">Click here to join us</Button>
      </div>
</div>
  )
}
export default LandingPageFour