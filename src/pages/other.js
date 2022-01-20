import React from "react"
import { StaticImage } from "gatsby-plugin-image"
function Profile() {
  return (
    <div className="text-white">
      <header className="bg-[#73ccbf] w-full h-[40em] relative">
        <div className="text-center p-6 absolute left-2/4 top-2/4 translate-x-2/4 translate-y-2/4 w-full">
          <h1 className=" font-bold tracking-widest text-3xl  ">
            SANDY GOODNEWS
          </h1>
          <p className="  text-xl font-['Open_Sans']">A Frontend Developer</p>
        </div>
      </header>
      <main >
        <div className="flex justify-around align-center text-black py-8  ">
          <div className=" ">
            <StaticImage
              src="../images/profilephotowhite.png"
              width={250}
              height={250}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="profileimage"
              className="rounded-full "
            />
          </div>
          <div className=" text-justify w-3/6">
            <h2 className="text-[#73ccbf] text-xl tracking-wide">About Me</h2>
            <p className="pb-2 text-xl"> I create inspiration</p>

            <p className="pb-2 text-xl">
              {" "}
              I build innovative solutions and help organization leverage
              technologies to achieve their business goals.
            </p>

            <p className="pb-2 text-xl">
              I translate designs and wireframes into appealing user interface
              that leaves lasting impression on users. My implementations are
              pixel perfect and optimized to work across all platforms.
            </p>
          </div>
        </div>
        {/* <div className=" font-bold p-4 text-center h-60 bg-[#f0ffff]">
          <h2 className="text-[#73ccbf]  text-xl tracking-wide">Skills</h2>
        </div> */}
        <div className=" p-4 text-center bg-[#1a202c] pt-18">
          <h2 className="font-bold text-[#73ccbf] text-xl py-8 tracking-wide">Experiences</h2>
          <div className="  flex justify-center flex-wrap text-black  gap-12  py-12">
            <div className=" w-2/6 flex justify-between items-center rounded-lg  relative  bg-gray-500">
              <div className="basis-4/12">
                <StaticImage
                  src="../images/tutorhub.png"
                  width={200}
                  height={200}
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="tutorhub"
                  class=""
                />
              </div>
              <a
                className="basis-8/12 p-4 text-justify"
                href="https://worker-tracker.vercel.app/"
              >
                {" "}
                <h3 className="font-bold">TutorHub</h3>
                <p className=" text-sm pt-2">
                  {" "}
                  I build innovative solutions and help organization leverage
                  technologies to achieve their business goals.
                </p>
              </a>
            </div>

            <div className=" w-2/6 flex  justify-between items-center rounded-lg  relative  bg-gray-500">
              <div className="basis-4/12">
                {" "}
                <StaticImage
                  src="../images/Launmax.jpg"
                  width={200}
                  height={200}
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="tutorhub"
                />
              </div>
              <a
                className="basis-8/12 p-4 text-justify"
                href="https://worker-tracker.vercel.app/"
              >
                <h3 className=" font-bold">LaunMax</h3>
                <p className="text-sm pt-2">
                  {" "}
                  I build innovative solutions and help organization leverage
                  technologies to achieve their business goals.
                </p>
              </a>
            </div>
            <div className=" w-2/6 flex justify-between items-center rounded-lg  relative  bg-gray-500">
              <div className="basis-4/12">
                <StaticImage
                  src="../images/MicroApi.png"
                  width={200}
                  height={200}
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="tutorhub"
                />
              </div>

              <a
                className="basis-8/12 p-4 text-justify"
                href="https://worker-tracker.vercel.app/"
              >
                <h3 className=" font-bold">MicroApi</h3>
                <p className=" text-sm pt-2">
                  {" "}
                  I build innovative solutions and help organization leverage
                  technologies to achieve their business goals.
                </p>
              </a>
            </div>
            <div className=" w-2/6 flex justify-between items-center rounded-lg  relative  bg-gray-500">
              <div className="basis-4/12">
                <StaticImage
                  src="../images/Rexhot.png"
                  width={200}
                  height={200}
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="tutorhub"
                />
              </div>

              <a
                className="basis-8/12 p-4 text-justify "
                href="https://worker-tracker.vercel.app/"
              >
                <h3 className="font-bold">RexHot</h3>
                <p className="text-sm pt-2">
                  {" "}
                  I build innovative solutions and help organization leverage
                  technologies to achieve their business goals.
                </p>
              </a>
            </div>
            <div className=" w-2/6 flex justify-between items-center rounded-lg  relative  bg-gray-500">
              <div className="basis-4/12">
                <StaticImage
                  src="../images/ShoeApp.png"
                  width={200}
                  height={200}
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="tutorhub"
                  // #d3d3d373
                />
              </div>
              <a
                className="basis-8/12 p-4 text-justify"
                href="https://worker-tracker.vercel.app/"
              >
                <h3 className=" font-bold">ShoeBooth</h3>
                <p className=" pt-2 text-sm">
                  {" "}
                  I build innovative solutions and help organization leverage
                  technologies to achieve their business goals.
                </p>
              </a>
            </div>
            <div className=" w-2/6 flex justify-between items-center rounded-lg  relative  bg-gray-500">
              <div className="basis-4/12">
                <StaticImage
                  src="../images/workertracker.png"
                  width={200}
                  height={200}
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="tutorhub"
                />
              </div>
              <a
                className="basis-8/12 p-4 text-justify"
                href="https://worker-tracker.vercel.app/"
              >
                <h3 className=" font-bold">Worker Tracker</h3>
                <p className="pt-2 text-sm">
                  {" "}
                  I build innovative solutions and help organization leverage
                  technologies to achieve their business goals.
                </p>
              </a>
            </div>
          </div>
        </div>
      </main>
    
      <footer className="pt-48 bg-black" >
        
       
           <div
            class="custom-shape-divider-bottom-1596474166 rotate-180 bottom-0  w-full"
          
          >
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="  h-24 w-[1600px] fill-[#73ccbf] "
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                class="shape-fill"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                class="shape-fill"
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                class="shape-fill"
              ></path>
            </svg>
          </div> 
        {/* </div> */}
      </footer>
    </div>
  )
}

export default Profile



