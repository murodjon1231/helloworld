import React from 'react'
import logo from "./assets/images/left.svg"
import log from './assets/images/Group 53.svg'
import img from './assets/images/Rectangle.svg'

const App = () => {
  return (
    <div className='body'>
      <nav>
        <img src={logo} alt="logo " />
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Product</a>
          </li>
          <li>
            <a href="">Faq</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="hero">
        <div className="tex">
          <h1 className='x1'>Why stay hungry when
            you can order form Bella Onojie</h1>
        </div>
        <div className="but">
          <button className='b1'>Playstore</button>
          <button className='b2'>App store</button>
        </div>
      </div>
      <div className="im">
        <img src={log} alt="" />
      </div>
      <h1 className='x2'>How the app works</h1>
      <div className="box">
        <img src={img} alt="" />
        <div className="text">
          <h1 className='x3'>Create/login to an existing
            account to get started</h1>
          <p className='p1'>An account is created with your email
            and a desired password</p>
        </div>
      </div>
      <div className="box">
        <div className="text">
          <h1 className='x3'>Shop for your favorites
            meal as e dey hot.</h1>
          <p className='p1'>Shop for your favorite meals or drinks
            and enjoy while doing it..</p>
        </div>
        <img src={img} alt="" />

      </div>
      <div className="box">
        <img src={img} alt="" />
        <div className="text">
          <h1 className='x3'>When you done check out
            and get it delivered.</h1>
          <p className='p1'>When you done check out and get it
            delivered with ease.</p>
        </div>
      </div>
      <div className="hero2">
        <div className="tex">
          <h1 className='x9'>Download the app now.</h1>
        </div>
        <div className="but">
          <button className='b1'>Playstore</button>
          <button className='b2'>App store</button>
        </div>
      </div>
      <footer>
        <img src={logo} alt="" />
        <p className='p2'>Copywright 2020 Bella Onojie.com</p>
      </footer>
    </div>
  )
}

export default App