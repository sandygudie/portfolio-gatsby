import React from "react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { AiOutlineMedium } from "react-icons/ai"
import { MdEmail } from "react-icons/md"
function Footer() {
  return (
    <div className=" text-white my-[5em] w-[85%] m-auto xl:mt-[8em] w-[80%] m-auto  ">
      <h1 className=" font-bold pt-[1em]  m-0 mt-6 text-[#73ccbf] text-[25px] md:text-3xl  xl:pt-[2em]">
        Contact
      </h1>
      <div className="gap-[20px] pt-2 m-auto items-center flex justify-center ">
        <a className="shadow-lg" href="mailto:sandygoodnews@gmail.com">
          <MdEmail />
        </a>
        <a href="https://github.com/sandygudie">
          {" "}
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/goodnews-sandy-613936179/">
          {" "}
          <FaLinkedinIn />
        </a>
        <a href="https://sandygoody.medium.com/">
          {" "}
          <AiOutlineMedium />
        </a>
      </div>

      <p className=" text-right pt-[1em]  m-0 mt-6  text-[12px] ">
        All rights reserved. Sandy © 2022
      </p>
    </div>
  )
}

export default Footer
