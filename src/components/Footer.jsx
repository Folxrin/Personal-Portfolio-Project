import { BsTwitter } from "react-icons/bs"; 
import { BsLinkedin } from "react-icons/bs"; 
import { SiFrontendmentor } from "react-icons/si"; 
import { BsGithub } from "react-icons/bs";

function Footer  () {
  return (
    <div className=' bg-black justify-between h-[8rem] px-[3rem] py-[3rem]'>
      <div className="flex relative font-bold justify-between  "> Tadiwanashe
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
      
    </div>
    </div>
  )
}

export default Footer
