import React, { useEffect, useState } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Profile from "./profile"
import Projects from "./projects"
import "normalize.css"
import Aboutme from "./aboutme"
import Loading from "./loading"
import Header from "../components/header"
import Footer from "../components/footer"

const IndexPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 6000)
  }, [])

  return isLoading ? (
    <Loading />
  ) : (
    <Layout>
      <Seo title="Goodnews Sandy" />
      
      {/* <div className=" slider z-20 w-[90%] flex justify-between text-[12px] text-white  text-md fixed left-[2em] bottom-[1em] md:bottom-[2.5em] md:w-[45%] font-bold lg:w-[40%] xl:w-[25%] "> */}
     <Header />
          <Profile />
          <Aboutme />
          <Projects />
     <Footer />
    </Layout>
  )
}

export default IndexPage
