import React from "react"
import { StaticImage } from "gatsby-plugin-image"
function Aboutme() {
  return (
    <div id="aboutme" className="w-10/12 m-auto">
      <h1 className="font-bold py-1 mt-12 text-primary text-lg md:text-2xl">
        About Me
      </h1>

      <div className="flex flex-col-reverse justify-between items-center gap-x-4 xl:flex-row mt-4">
        <div className="text-justify basis-3/5 leading-10 text-lg">
          <p className="pt-2">
            Hi!
            <span role="img" aria-label="wave">
              👋
            </span>
            , My name is <span className="text-primary">Goodnews Sandy.</span>{" "}
            <br /> I am an experienced{" "}
            <span className="text-primary">Frontend developer </span>,{" "}
            <span className="text-primary">Tech Instructor </span>
            and <span className="text-primary">Writer. </span>I enjoy building
            web-based applications that leaves a lasting impression on users. I
            am big on performance, accessibilty and simplicity.{" "}
          </p>
          <p className="pt-2">
            I contribute to open source and share technical topics on my{" "}
            <span className="text-primary">
              <a href="https://sandygoody.medium.com">Meduim.</a>
            </span>{" "}
            I love the thrills of{" "}
            <span className="text-primary">Startups.</span>{" "}
          </p>
          <p className="pt-2">
            {" "}
            Some tools/technologies i have work with includes:
            <ul>
              <li>
                {" "}
                <span className="text-primary">Technologies: </span> HTML, CSS,
                SASS, TypeScript, JavaScript,
              </li>
              <li>
                <span className="text-primary">Styling libraries: </span>
                TailwindCSS, Material UI
              </li>
              <li>
                <span className="text-primary">Framework :</span> ReactJs, Vite,
                NextJs, Gatsby
              </li>
              <li>
                <span className="text-primary">Backend Tools:</span> NodeJs,
                Firebase
              </li>
            </ul>
          </p>
          <a
            className="rounded-md p-2 font-bold border border-white bg-white w-24 text-secondary hover:bg-transparent md:hidden"
            href="https://docs.google.com/document/d/1TGO4P6XlqEZfvw5tUH4uoEaLKvWILtxAAinyAPIGC8U/edit?usp=sharing"
            rel="noreferrer"
            target="_blank"
          >
            Resume
          </a>
        </div>
        <StaticImage
          src="../images/profile-image.PNG"
          width={350}
          height={350}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="profileimage"
          className="rounded-lg"
        />
      </div>
    </div>
  )
}

export default Aboutme
