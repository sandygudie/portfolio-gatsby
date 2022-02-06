import React from "react"
import { StaticImage } from "gatsby-plugin-image"
function Aboutme() {
  return (
    <div id="aboutme" className=" w-[85%] m-auto md:py-[5em]">
      <h1 className=" font-bold py-[1em]  m-0 mt-6 text-[#73ccbf] text-[25px] md:text-3xl  xl:py-[2em]">
        About Me
      </h1>

      <div className=" flex flex-col-reverse justify-around items-center xl:flex-row ">
        <div className="  text-white text-md leading-8 text-justify md:text-[1rem] md:tracking-wider  md:leading-[3em] lg:leading-20 xl:leading-[2em] xl:w-[50%] xl:tracking-normal xl:text-xl">
          <p className="pt-2">
            Hi!
            <span role="img" aria-label="wave">
              👋
            </span>
            , My name is{" "}
            <span className="text-[#73ccbf] text-bold">Goodnews Sandy.</span>{" "}
            <br /> I am an experienced{" "}
            <span className="text-[#73ccbf] text-bold">
              Frontend developer{" "}
            </span>
            , <span className="text-[#73ccbf] text-bold">Tech Instructor </span>
            and <span className="text-[#73ccbf] text-bold">Writer. </span>I
            enjoy building web-based applications that leaves a lasting
            impression on users. I am big on performance, accessibilty and
            simplicity.{" "}
          </p>
          <p className="pt-2 ">
            {" "}
            I leverage on various tools to make impact including: HTML,
            CSS/SASS, TailwindCSS, Javascript, ReactJs, Nodejs ,Gatsby, NextJs,
            Firebase.{" "}
          </p>

          <p className="pt-2">
            I contribute to open source and share technical topics on
            my <span className="text-[#73ccbf] text-bold">Blog.</span> And, I
            love the thrills of{" "}
            <span className="text-[#73ccbf] text-bold">Startups.</span>{" "}
          </p>

          <a
            className="rounded-md  p-2 font-bold border border-white bg-white w-24 text-black hover:bg-transparent text-white md:hidden"
            href="https://drive.google.com/file/d/16iHk-1jsugthIesU1aQs-_YXhZIVoMlX/view?usp=sharing"
            rel="noreferrer"
            target="_blank"
          >
            Resume
          </a>
        </div>

        <StaticImage
          src="../images/profilephotowhite.jpg"
          width={400}
          height={400}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="profileimage"
          className=" rounded-lg w-[150px] h-[150px]    md:w-[300px] md:h-[300px]  "
        />
      </div>
    </div>
  )
}

export default Aboutme
