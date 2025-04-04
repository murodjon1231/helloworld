import React from 'react'
import logo from "../public/images/Logo.svg"
import heroe from "../public/images/Illustration.svg"
import logotip from "../public/images/Logo.svg"
import sity from "../public/images/Icon.svg"
import icon from "../public/images/rafiki.svg";


const App = () => {
  return (
    <div className='body'>
    <nav>
    <img className='i1' src={logo} alt="logo" />
    <div className="row">
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Features</a>
        </li>
        <li>
          <a href="">Community</a>
        </li>
        <li>
          <a href="">Blog</a>
        </li>
        <li>
          <a href="">Pricing</a>
        </li>
      </ul>
      <button className='b1'>Register Now</button>
    </div>
    </nav>


    <div className="hero">
      <div className="text">
        <h1 className='x1'>Lessons and insights <span>from 8 years</span></h1>
        <p className='p1'>Where to grow your business as a photographer: site or social media?</p>
        <button className='b2'>Register</button>
      </div>
      <img className='i2' src={heroe} alt="logo" />
    </div>


    <div className="container">
      <h1 className='x2'>Our Clients</h1>
      <p className='p2'>We have been working with some Fortune 500+ clients</p>
    <div className="img">
    <img className='i3' src={logotip} alt="logo" />
    <img className='i3' src={logotip} alt="logo" />
    <img className='i3' src={logotip} alt="logo" />
    <img className='i3' src={logotip} alt="logo" />
    <img className='i3' src={logotip} alt="logo" />
    <img className='i3' src={logotip} alt="logo" />
    <img className='i3' src={logotip} alt="logo" />
    <img className='i3' src={logotip} alt="logo" />
    </div>
    </div>
    <div className="container-2">
      <div className="tex">
        <h1 className='x3'>Manage your entire community in a single system</h1>
        </div>
        <div className="con-box">
          <div className="box">
           <div className="ii">
           <img className='i4' src={sity} alt="logo" />
           </div>
             <h1 className='x4'>Membership Organisations</h1>
             <p className='p3'>Our membership management software provides full automation of membership renewals and payments</p>
          </div>
          <div className="box">
           <div className="ii">
           <img className='i4' src={sity} alt="logo" />
           </div>
             <h1 className='x4'>Membership Organisations</h1>
             <p className='p3'>Our membership management software provides full automation of membership renewals and payments</p>
          </div>
          <div className="box">
           <div className="ii">
           <img className='i4' src={sity} alt="logo" />
           </div>
             <h1 className='x4'>Membership Organisations</h1>
             <p className='p3'>Our membership management software provides full automation of membership renewals and payments</p>
          </div>
        </div>
    </div>


    <footer>
      <img className='i5' src={icon} alt="logo" />
      <div className="box-2">
        <h1 className='x5'>The unseen of spending three years at Pixelgrade</h1>
        <p className='p4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
        <button className='b3'>Learn More</button>
      </div>
    </footer>
    </div>
  )
}

export default App