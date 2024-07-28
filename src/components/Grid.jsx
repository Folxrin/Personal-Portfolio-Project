import React from 'react';
import g1 from '../assets/g1.jpg'
import g2 from '../assets/g2.png'
import g3 from '../assets/g3.png'
import g4 from '../assets/g4.png'
import g5 from '../assets/g5.png'
import g6 from '../assets/g6.png'

const GridItem = ({ image, text1, text2, hoverText1, hoverText2 }) => (
  <div className="card">
    <div className="image-container">
      <img src={image} alt="" className="card-img-top" />
      <div className="hover-text">
        <p>{hoverText1}</p>
        <p>{hoverText2}</p>
      </div>
    </div>
    <div className="card-body">
      <p className="card-text">{text1}</p>
      <p className="card-text">{text2}</p>
    </div>
  </div>
);

const Grid = () => (
  <div className='my-[4rem]'>
    <div className='flex justify-center md:justify-between lg:justify-between flex-row mx-[1rem] md:mx-1.5rem] lg:mx-[2rem]'>
      <h1 className='font-bold text-5xl'>Projects</h1>
      <a href="https://zw.linkedin.com/in/tadiwanashe-matthew-mashonganyika">
        <button className="hover:text-accent border-b-2 hover:border-accent
         text-white  font-bold py-4 flex relative  border-md"> 
        Contact Me
        </button>
      </a>
    </div>

    <div className="grid grid-rows-2 gap-2 font-semibold   ">
      <GridItem 
        image={g1} 
        text1="Design Portfolio" 
        text2="HTML CSS" 
        hoverText1="View Project " 
        hoverText2="View Code" 
      />
      <GridItem 
        image={g2} 
        text1="E-Learning Landing Page" 
        text2="HTML CSS" 
        hoverText1="View Project " 
        hoverText2="View Code" 
      />
      <GridItem 
        image={g3} 
        text1="Todo Web App" 
        text2="HTML CSS JAVASCRIPT" 
        hoverText1="View Project " 
        hoverText2="View Code" 
      />
      <GridItem 
        image={g4} 
        text1="Entertainment Web App" 
        text2="HTML CSS JAVASCRIPT" 
        hoverText1="View Project " 
        hoverText2="View Code" 
      />
      <GridItem 
        image={g5} 
        text1="Memory Game" 
        text2="HTML CSS JAVASCRIPT" 
        hoverText1="View Project " 
        hoverText2="View Code" 
      />
      <GridItem 
        image={g6} 
        text1="Art Gallery Showcase" 
        text2="HTML CSS JAVASCRIPT" 
        hoverText1="View Project " 
        hoverText2="View Code" 
      />
    </div>
  </div>
);

export default Grid;