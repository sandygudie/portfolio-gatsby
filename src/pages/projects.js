import React from "react"
import { BiLinkExternal } from "react-icons/bi"
import { FaGithub } from "react-icons/fa"


function Projects(imagedata) {
  
  const project = [
    {
      id: 0,
      name: "Lootnance",
      description: "A trading platform for NFT.",
      tools: ["NextJs", "TypeScript", "Formik", "Yup"],
      link: "https://www.lootnance.com/",
      Github_link: "https://www.lootnance.com/",
      image: "../images/lootnance.PNG",
    },

    {
      id: 1,
      name: "Invoice App",
      description: "An app to view, create and filter invoices.",
      tools: [
        "React",
        "Typescript",
        "TailwindCSS",
        "Context-Api",
        "Framer-motion",
        "Formik-yup",
      ],
      link: " https://app-invoice.netlify.app/",
      Github_link: "https://github.com/sandygudie/Invoice-App",
      image: "../images/invoice.PNG",
    },
    {
      id: 2,
      name: "Pomodoro Stop-watch",
      description: " A Pomodoro timer with control settings.",
      tools: ["HTML", "SASS", "WebPack", "JavaSript"],
      link: " https://pomodoro-stopwatch.netlify.app/",
      Github_link: "https://github.com/sandygudie/Pomodoro-Timer",
      image: "../images/pomodoro.PNG",
    },
    {
      id: 3,
      name: "Comment App",
      description: "Interactive Comment App.",
      tools: ["Typescript", "Nextjs", "TailwindCSS", "Context-Api"],
      link: "https://app-interactive-comments.netlify.app/",
      Github_link: "https://github.com/sandygudie/interactive-comments",
      image: "../images/comment-app.PNG",
    },
    {
      id: 4,
      name: "NetWorth",
      description: "Keep track of your assets.",
      tools: ["HTML", "SASS", "Javascript"],
      link: "https://mynetworth.netlify.app/",
      Github_link: "https://mynetworth.netlify.app/",
      image: "../images/Launmax.jpg",
    },

    {
      id: 5,
      name: "Shopping App",
      description: "Ecommerce App for women's footwear.",
      tools: ["HTML", "SASS", "Javascript", "Contentful"],
      link: "https://womenheels.netlify.app/ ",
      Github_link: "https://github.com/sandygudie/shoppingcart",
      image: "../images/ShoeApp.png",
    },

    {
      id: 6,
      name: "Whatsapp Clone",
      description: "Whatsapp Clone.",
      tools: ["ReactJs", "Firebase"],
      link: "https://whatsapp-clone-steel.vercel.app/",
      Github_link: "https://github.com/sandygudie/Whatsapp-clone",
      image: "../images/whatsapp_clone.PNG",
    },
  ]

  return (
    <div id="project" className="py-[5em] shadow-lg w-11/12 m-auto">
      <h1 className="text-center font-bold py-2 mt-12 text-primary text-lg md:text-2xl">
        Projects
      </h1>

      <div className="my-8 flex justify-center flex-wrap gap-6">
        {project.map(item => {
          return (
            <div
              key={item.id}
              className="w-80 h-80  rounded-lg my-6 bg-dark relative lg:w-96 lg:h-96 md:w-80 md:h-80  hover:bg-dark/5 hover:border-primary hover:border-2"
              href={item.link}
              rel="noreferrer"
              target="_blank"
            >
              <div className="flex gap-x-4 justify-end m-8 text-primary text-xl">
                <a href={item.Github_link} rel="noreferrer" target="_blank">
                  {" "}
                  <FaGithub />
                </a>
                <BiLinkExternal />{" "}
              </div>
              <div className="text-center absolute left-2/4 top-2/4 w-4/5 translate-x-2/4 translate-y-2/4 leading-6 w-60">
                <h2 className="text-lg text-primary font-bold">{item.name}</h2>
                <p className="text-base"> {item.description}</p>
              </div>{" "}
              <div className="absolute bottom-2 p-6">
                <p className="text-sm text-primary">Built with:</p>
                <ul className="flex gap-x-4 flex-wrap justify-start items-center text-xs">
                  {item.tools.map((list, i) => {
                    return <li key={i}>{list},</li>
                  })}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
