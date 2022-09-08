import React from "react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { AiOutlineMedium } from "react-icons/ai"
import { MdEmail } from "react-icons/md"

function Footer() {
  const links = [
    {
      id: 0,
      icon: <MdEmail />,
      link: "mailto:sandygoodnews@gmail.com",
    },
    {
      id: 1,
      icon: <FaGithub />,
      link: "https://github.com/sandygudie",
    },
    {
      id: 2,
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/goodnews-sandy-613936179/",
    },
    {
      id: 3,
      icon: <AiOutlineMedium />,
      link: "https://sandygoody.medium.com/",
    },
  ]
  return (
    <div id="contact" className="text-white my-6 w-11/12 m-auto">
      <h1 className="text-center font-bold py-2 mt-12 text-primary text-lg md:text-2xl">
        Contact
      </h1>
      <div className="gap-x-6 pt-2 m-auto items-center flex justify-center">
        {links.map(item => {
          return (
            <a
              key={item.id}
              className="mr-3 border-2 border-primary p-2 rounded-full hover:text-primary hover:border-dark"
              href={item.link}
            >
              {item.icon}
            </a>
          )
        })}
      </div>

      <p className="text-center pt-2 mt-6 text-sm">
        All rights reserved. Sandy © 2022
      </p>
    </div>
  )
}

export default Footer
