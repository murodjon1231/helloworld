import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Main from './components/Main'

const App = () => {
  return (
    <div>
     <div className='bg-[url(./assets/body.svg)] bg-cover '>
     <Nav/>
     <Hero/>
     </div>
     <div className='bg-[url(./assets/bod.svg)] '>
     <Main/>
     </div>
    </div>
  )
}

export default App