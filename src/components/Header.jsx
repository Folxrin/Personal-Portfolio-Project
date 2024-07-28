import { BsTwitter } from "react-icons/bs"; 
import { BsLinkedin } from "react-icons/bs"; 
import { SiFrontendmentor } from "react-icons/si"; 
import { BsGithub } from "react-icons/bs"; 
import hero  from  '../assets/hero.png'
function Header() {
  return (
    <div className="flex relative">
    <nav className="absolute top-3 bottom-[3rem] w-full h-10 
                    flex justify-between items-center px-[1rem] md:px-[2rem] lg:px-[2rem] ">
      <div className="text-lg md:text-xl lg:text-2xl text-white font-bold sm:flex-col lg:flex-grow-0">Tadiwanashe </div>
      <ul className="flex justify-center items-center">
        <li className="mr-6">
          <a href="https://github.com/Tadiwanashe-Mashonganyika" className="text-white hover:text-accent">
          <BsGithub />
          </a>
        </li>
        <li className="mr-6">
          <a href="#" className="text-white hover:text-accent">
            <SiFrontendmentor />  
          </a>
        </li>
        <li className="mr-6">
          <a href="https://zw.linkedin.com/in/tadiwanashe-matthew-mashonganyika" className="text-white h-[14px] hover:text-accent">
          <BsLinkedin />
          </a>
        </li>

        <li >
          <a href="#" className="text-white hover:text-accent">
          <BsTwitter />
          </a>
        </li>
      </ul>
     
    </nav>

 
    <section className="flex  bg-contain bg-center  border-white border-b pb-[3rem] " >
    <div className="container justify-between items-start py-8 md:my-[4rem]  lg:py-15 mx-3  pt-6 md:px-6 lg:px-12">
        <h1 className=" text-lg md:text-4xl lg:text-6xl tracking-[2px] font-bold text-white">Nice to meet you! <br />
        I'm Tadiwanashe Mashonganyika.</h1>
        <p className="text-lg justify-items-center lg:justify-evenly text-gray-200 py-[3rem]">Based in Zimbabwe,
        I'm a front-end developer passionate about building accessible web apps that users love.</p>
     
 
        
        <a href="https://zw.linkedin.com/in/tadiwanashe-matthew-mashonganyika">
        <button className="hover:text-accent border-b-2 py-4 hover:border-accent text-white font-bold my-9 border-md"> 
        Contact Me
        </button>
        </a>
      </div>

      <div className="hero  flex top-0 lg:top-[-10rem ] 
      bg-contain bg-no-repeat content-center
      md:content-around lg:content-end ">
      <img src={hero} alt="hero.img"/>
      </div>

    </section>


    </div>
  );
}

export default Header;