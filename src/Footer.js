import React from 'react'
import Form from './components/Form'
import { BsFacebook,BsTwitter,BsInstagram,BsLinkedin } from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
       <div className='footer'>
      <div className='row'>
        <div className='col'>
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact us</li>
            <li>Reports</li>
            <li>Blog</li>
            <li>Recipe</li>
          </ul>
        </div>
        <div className='col'>
          <h3> Community</h3>
          <ul>
            <li>Stack OverFlow</li>
            <li> issues</li>
            <li>Discussion</li>
            <li>Forums</li>
            <li>Corporate Sponsors</li>
            <li>Webpack</li>
          </ul>
        </div>
        <div className='col'>
          <h3>Tracksheet</h3>
          <ul>
            <li>RISK FREE CRUDE OIL TIPS</li>
            <li>BASEMETAL PREMIUM TIPS</li>
            <li>GOLD PREMIUM TIPS</li>
            <li>GOLD SILVER PREMIUM TIPS</li>
            <li>PROFITABLE MCX TIPS</li>
            <li>SILVER CRYSTAL TIPS</li>
          </ul>
        </div>
        <div className='col'>
        <h3>Request Call Back</h3>
          <Form />
      <div className='social-icons-footer'>
        <a href="https://www.facebook.com/">
          <BsFacebook /> facebook
        </a>
        <a href="https://www.twitter.com/">
          <BsTwitter /> twitter
        </a>
        <a href="https://www.instagram.com/">
          <BsInstagram /> instagram
        </a>
        <a href="https://www.linkedin.com/">
          <BsLinkedin /> linkedin
        </a>
      </div>
        </div>
        
      </div>
      <div style={{textAlign:"center"}}>
      <p>All ©️Copyright Reserved</p>
      <p>Private policy</p>
      </div>
      
    </div>
    </footer>
   
  )
}

export default Footer