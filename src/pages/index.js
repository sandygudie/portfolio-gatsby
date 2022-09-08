import React from "react"
import Seo from "../components/Seo"
import Profile from "./profile"
import Projects from "./projects"
import Aboutme from "./aboutme"
import Header from "../components/Header"
import Footer from "../components/Footer"

const IndexPage = () => {
  return (
    <>
      <Seo
        title="Goodnews Sandy 
      Portfolio"
      />
      <Header />
      <Profile />
      <Aboutme />
      <Projects />
      <Footer />
    </>
  )
}

export default IndexPage
