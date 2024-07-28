import React from 'react'

import Header from './components/Header'
import Grid from './components/Grid'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'



function App() {
 

  return (
  <div className="flex  bg-dark w-full md:w-full lg:w-full 
  items-center justify-center 
  snap-none">


<div className='text-white mx-0'>
<div className='justify-center items-center'>

<div className='flex  relative mx-[3rem]'>
<Header/>
</div>

<article className="skills flex  justify-center items-center
mx-[3rem] my-[2rem]">
  <div className="skills-grid grid lg:grid-rows-2 lg:grid-cols-3 gap-[40px] md:gap-0 lg:gap-[3rem]">
    <div className="skill">
      <h2 className='text-3xl font-bold'>HTML</h2>
      <h3>4 Years experience</h3>
    </div>

    <div className="skill">
      <h2 className='text-3xl font-bold'>CSS</h2>
      <h3>4 Years experience</h3>
    </div>

    <div className="skill">
      <h2 className='text-3xl font-bold'>JavaScript</h2>
      <h3>4 Years experience</h3>
    </div>

    <div className="skill">
      <h2 className='text-3xl font-bold'>Accessibility</h2>
      <h3>4 Years experience</h3>
    </div>

    <div className="skill">
      <h2 className='text-3xl font-bold'>React</h2>
      <h3>3 Years experience</h3>
    </div>

    <div className="skill">
      <h2 className='text-3xl font-bold'>Sass</h2>
      <h3>3 Years experience</h3>
    </div>
  </div>
</article>


<Grid/>           

<div>
<ContactForm/>
<Footer/>
</div>


</div>
</div>
  </div>
  
  )
}

export default App
