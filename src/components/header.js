import * as React from "react"
// import PropTypes from "prop-types"
// import { Link } from "gatsby"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { AiOutlineMedium } from "react-icons/ai"
import { MdEmail } from "react-icons/md"

const Header = () => (
  <div className="  p-6 shadow-lg bg-[#1a202c] text-white fixed w-full md:px-6  md:py-6 xl:px-36 z-10 ">
    <div className=" hidden md:flex justify-between items-center">
      <a
        className="rounded-md  p-2 font-bold border border-white bg-white w-24 text-black hover:bg-transparent hover:text-white"
        href="https://drive.google.com/file/d/16iHk-1jsugthIesU1aQs-_YXhZIVoMlX/view?usp=sharing"
        rel="noreferrer"
        target="_blank"
      >
        Resume
      </a>

      <div className="   flex flex-row  justify-between  md:w-[60%]  xl:w-[40%]  ">
        <div className="  flex justify-between text-[16px] w-[60%] mr-[25px] text-white text-md ">
          <a  className="hover:text-[#73ccbf]" href="#profile"> Profile </a>
          <a className="hover:text-[#73ccbf]" href="#aboutme">About Me</a>
          <a className="hover:text-[#73ccbf]" href="#project">Projects</a>
        </div>
        <div className="w-[25%] items-center flex justify-between ">
          <a className="  text-white" href="mailto:sandygoodnews@gmail.com">
            <MdEmail />
          </a>
          <a className="  text-white" href="https://github.com/sandygudie">
            {" "}
            <FaGithub />
          </a>
          <a
            className=" text-white"
            href="https://www.linkedin.com/in/goodnews-sandy-613936179/"
          >
            {" "}
            <FaLinkedinIn />
          </a>
          <a className=" text-white" href="https://sandygoody.medium.com/">
            {" "}
            <AiOutlineMedium />
          </a>
        </div>
      </div>
    </div>
    <div className="  flex justify-between text-[16px] mt-3 text-white text-md md:hidden">
      <a href="#profile"> Profile </a>

      <a href="#aboutme">About Me</a>
      <a href="#project">Projects</a>
    </div>
  </div>
)

export default Header
