import React from "react"

function Profile() {
  return (
    <div
      id="profile"
      className="h-screen relative w-full text-white shadow-lg w-6/6"
    >
      <div className="w-full absolute left-2/4 top-2/4 font-bold translate-x-2/4 translate-y-2/4 text-center">
        <p className="text-xl font-bold md:mt-24 xl:text-2xl">Hi!,</p>
        <h2 className="font-bold text-2xl md:text-5xl">
          I am a Frontend Developer
        </h2>
        <h1 className="text-4xl pb-6 font-bold text-red-500 md:text-7xl ">
          I Create Inspiration.
        </h1>
      </div>
    </div>
  )
}

export default Profile
