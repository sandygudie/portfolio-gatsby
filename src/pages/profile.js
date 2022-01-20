import React from "react"


function Sidebar() {
  return (
    <div  id="profile" className="h-[70vh] relative w-full  text-white  shadow-lg w-6/6 md:md:h-[50vh] xl:h-[100vh]">
    

      <div className=" top-[60%] w-[90%] absolute left-2/4 top-2/4  font-bold translate-x-2/4 translate-y-2/4   text-center page--details ">
      
      
          <p className=" mt-6 text-xl font-bold md:mt-12 xl:text-2xl ">
            Hi! , 
          </p>
          <h2 className="font-bold text-2xl md:text-5xl  ">I am a Frontend Developer</h2>
          <h1 className="m-0 text-4xl pb-6 font-bold text-red-500 md:text-7xl ">
            I Create Inspiration.
          </h1>
       
      </div>
    </div>
  )
}

export default Sidebar
