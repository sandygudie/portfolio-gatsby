import React from "react"
import Seo from "../components/seo"
import Profile from "./profile"
import Projects from "./projects"
import Aboutme from "./aboutme"
import Header from "../components/header"
import Footer from "../components/footer"

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
