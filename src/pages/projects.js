import React from "react"

import { StaticImage } from "gatsby-plugin-image"
import { BiLinkExternal } from "react-icons/bi"

function Projects() {
  return (
    <div
      id="project"
      className=" py-[5em] shadow-lg w-[85%] m-auto xl:pt-[8em] "
    >
      <h1 className=" text-center font-bold  py-[1em] m-0 text-bold mt-6 text-[#73ccbf] text-[25px] md:text-3xl  xl:py-[2em]">
        Projects
      </h1>

      <div className=" px-[1em] mb-[1em] mx-auto h-[79%]   md:h-[100%] md:flex justify-center flex-wrap  md:h-[80%] gap-4 md:w-full ">
      <div className="project_card  shadow-lg my-6 rounded-lg   relative text-white md:w-[300px] md:h-[300px]  lg:h-[350px] lg:w-[350px] xl:h-[250px] xl:w-[250px]  md:my-0">
          <StaticImage
            src="../images/tutorhub.png"
            width={200}
            height={200}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="tutorhub"
            class="h-full w-full  rounded-lg"
          />
          <a
            className=" rounded-lg absolute top-0 left-0 bg-[#000000] h-full w-full "
            href="https://www.lootnance.com/"
          >
            <BiLinkExternal className=" m-4 float-right text-2xl text-[#73ccbf]" />{" "}
            <div className=" absolute left-2/4 top-2/4 w-4/5  translate-x-2/4 translate-y-2/4  leading-6 w-[80%]">
              <h2 className=" text-[18px] text-[#73ccbf] font-bold">
                Lootnance
              </h2>
              <p className="text-[16px]">
                {" "}
                For Trading LTT.{" "}
              </p>
            </div>{" "}
            <ul className=" flex justify-between items-center  w-1/2 absolute bottom-3 left-5 text-[0.7rem]  tracking-wide ">
              <li>NextJS,Typescript</li>
            </ul>
          </a>
        </div>
        
        <div className="project_card  shadow-lg my-6 rounded-lg   relative text-white md:w-[300px] md:h-[300px]  lg:h-[350px] lg:w-[350px] xl:h-[250px] xl:w-[250px]  md:my-0">
          <StaticImage
            src="../images/tutorhub.png"
            width={200}
            height={200}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="tutorhub"
            class="h-full w-full  rounded-lg"
          />
          <a
            className=" rounded-lg absolute top-0 left-0 bg-[#000000] h-full w-full "
            href="https://tutorhub.vercel.app/"
          >
            <BiLinkExternal className=" m-4 float-right text-2xl text-[#73ccbf]" />{" "}
            <div className=" absolute left-2/4 top-2/4 w-4/5  translate-x-2/4 translate-y-2/4  leading-6 w-[80%]">
              <h2 className=" text-[18px] text-[#73ccbf] font-bold">
                TutorHub
              </h2>
              <p className="text-[16px]">
                {" "}
                Find online tutors. You can schedule for one-on-one or group
                learning.{" "}
              </p>
            </div>{" "}
            <ul className=" flex justify-between items-center  w-1/2 absolute bottom-3 left-5 text-[0.7rem]  tracking-wide ">
              <li>MERN</li>
            </ul>
          </a>
        </div>

        <div className="project_card  shadow-lg my-6 rounded-lg   relative text-white md:w-[300px] md:h-[300px]  lg:h-[350px] lg:w-[350px] xl:h-[250px] xl:w-[250px]  md:my-0">
          <StaticImage
            src="../images/Launmax.jpg"
            width={200}
            height={200}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="tutorhub"
            class="h-full w-full  rounded-lg"
          />
          <a
            className=" rounded-lg absolute top-0 left-0 bg-[#000000] h-full w-full "
            href="https://launmax.netlify.app/"
          >
            <BiLinkExternal className=" m-4 float-right text-2xl text-[#73ccbf]" />{" "}
            <div className="absolute left-2/4 top-2/4 w-4/5  translate-x-2/4 translate-y-2/4  leading-6 w-[80%]">
              <h2 className=" text-[18px] text-[#73ccbf] font-bold">LaunMax</h2>
              <p className="text-[16px]">
                {" "}
                Official Website for a Laundry Business Mobile App.{" "}
              </p>
            </div>
            <ul className=" flex justify-between items-center w-1/2 absolute bottom-3 left-5 text-[0.7rem]  tracking-wide ">
              <li>HTML</li>
              <li>SASS</li>
              <li> JS</li>
            </ul>
          </a>
        </div>
        <div className="project_card  shadow-lg my-6 rounded-lg   relative text-white md:w-[300px] md:h-[300px]  lg:h-[350px] lg:w-[350px] xl:h-[250px] xl:w-[250px]  md:my-0">
          <StaticImage
            src="../images/MicroApi.png"
            width={200}
            height={200}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="tutorhub"
            class="h-full w-full  rounded-lg"
          />
          <a
            className=" rounded-lg absolute top-0 left-0 bg-[#000000] h-full w-full "
            href="https://microapicore.herokuapp.com/"
          >
            <BiLinkExternal className=" m-4 float-right text-2xl text-[#73ccbf]" />
            <div className="absolute left-2/4 top-2/4 w-4/5  translate-x-2/4 translate-y-2/4 leading-6 w-[80%]">
              <h2 className=" text-[18px] text-[#73ccbf] font-bold">
                MicroApi
              </h2>
              <p className="text-[16px]">
                APIs for developers, you can easily integrated into projects.{" "}
              </p>
            </div>
            <ul className=" flex justify-between items-center w-1/2 absolute bottom-3 left-5 text-[0.7rem]  tracking-wide ">
              <li>PYTHON</li>
            </ul>
          </a>
        </div>
        <div className="project_card  shadow-lg my-6 rounded-lg   relative text-white md:w-[300px] md:h-[300px]  lg:h-[350px] lg:w-[350px] xl:h-[250px] xl:w-[250px]  md:my-0">
          <StaticImage
            src="../images/Rexhot.png"
            width={200}
            height={200}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="tutorhub"
            class="h-full w-full  rounded-lg"
          />
          <a
            className=" rounded-lg absolute top-0 left-0 bg-[#000000] h-full w-full "
            href="https://terms-goodnewssandy.vercel.app/"
          >
            <BiLinkExternal className=" m-4 float-right text-2xl text-[#73ccbf]" />{" "}
            <div className="absolute left-2/4 top-2/4 w-4/5  translate-x-2/4 translate-y-2/4 leading-6 w-[80%]">
              <h2 className=" text-[18px]  text-[#73ccbf] font-bold ">
                RexHot
              </h2>
              <p className="text-[16px]">
                Creators get rewards for creativity.
              </p>
            </div>{" "}
            <ul className=" flex justify-between items-center w-1/2 absolute bottom-3 left-5 text-[0.7rem]  tracking-wide ">
              <li>REACT</li>
            </ul>
          </a>
        </div>
        <div className="project_card  shadow-lg my-6 rounded-lg   relative text-white md:w-[300px] md:h-[300px]  lg:h-[350px] lg:w-[350px] xl:h-[250px] xl:w-[250px]  md:my-0">
          <StaticImage
            src="../images/ShoeApp.png"
            width={200}
            height={200}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="tutorhub"
            class="h-full w-full  rounded-lg"
          />
          <a
            className=" rounded-lg absolute top-0 left-0 bg-[#000000] h-full w-full "
            href="https://womenheels.netlify.app/"
          >
            <BiLinkExternal className=" m-4 float-right text-2xl text-[#73ccbf]" />{" "}
            <div className="absolute left-2/4 top-2/4   translate-x-2/4 translate-y-2/4  leading-6 w-[80%]">
              <h2 className=" text-[18px] text-[#73ccbf] font-bold">
                ShoeBooth
              </h2>
              <p className="text-[16px] ">
                {" "}
                An ecommerce app for women footwears.{" "}
              </p>
            </div>
            <ul className=" flex justify-between items-center w-[75%] absolute bottom-3 left-5 text-[0.7rem]  tracking-wide ">
              <li>VANILLAJS</li>
              <li>CONTENTFUL</li>
            </ul>
          </a>
        </div>
        <div className="project_card  shadow-lg my-6 rounded-lg   relative text-white md:w-[300px] md:h-[300px]  lg:h-[350px] lg:w-[350px] xl:h-[250px] xl:w-[250px]  md:my-0">
          <StaticImage
            src="../images/workertracker.png"
            width={200}
            height={200}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="tutorhub"
            class="h-full w-full  rounded-lg"
          />
          <a
            className=" rounded-lg absolute top-0 left-0 bg-[#000000] h-full w-full "
            href="https://mynetworth.netlify.app/"
          >
            <BiLinkExternal className=" m-4 float-right text-2xl text-[#73ccbf]" />
            <div className="absolute left-2/4 top-2/4   translate-x-2/4 translate-y-2/4  leading-6 w-[80%]">
              <h2 className=" text-[16px] text-[#73ccbf]  font-bold ">
                Networth
              </h2>
              <p className="text-[18px]"> Keep track of your asests.</p>
            </div>

            <ul className=" flex justify-between items-center w-1/2 absolute bottom-3 left-5 text-[0.7rem]  tracking-wide ">
              <li>HTML</li>
              <li>SASS</li>
              <li> JS</li>
            </ul>
          </a>
        </div>
        <div className="project_card  shadow-lg my-6 rounded-lg   relative text-white md:w-[300px] md:h-[300px]  lg:h-[350px] lg:w-[350px] xl:h-[250px] xl:w-[250px]  md:my-0">
          <StaticImage
            src="../images/workertracker.png"
            width={200}
            height={200}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="tutorhub"
            class="h-full w-full  rounded-lg"
          />
          <a
            className=" rounded-lg absolute top-0 left-0 bg-[#000000] h-full w-full "
            href="https://goodnewssandy.netlify.app/"
          >
            <BiLinkExternal className=" m-4 float-right text-2xl text-[#73ccbf]" />
            <div className="absolute left-2/4 top-2/4   translate-x-2/4 translate-y-2/4  leading-6 w-[80%]">
              <h2 className=" text-[16px] text-[#73ccbf]  font-bold ">
              Portfolio
              </h2>
              {/* <p className="text-[18px]"> Keep track of your asests.</p> */}
            </div>

            <ul className=" flex justify-between items-center w-[55%] absolute bottom-3 left-5 text-[0.7rem]  tracking-wide ">
              <li>Gatsby</li>
              <li>TailwindCSS</li>
             
            </ul>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects
