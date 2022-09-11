import React, { useEffect, useState } from "react"
import Seo from "../components/seo"
import Profile from "./profile"
import Projects from "./projects"
import Aboutme from "./aboutme"
import Header from "../components/header"
import Footer from "../components/footer"
import { graphql } from "gatsby"

export const pageQuery = graphql`
  query {
    photos: allFile(
      sort: { fields: base, order: ASC }
      filter: { extension: { regex: "/(jpg|png)/" } }
    ) {
      edges {
        node {
          id
          base
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              height: 400
              formats: AUTO
              width: 600
              quality: 70 # 50 by default
              transformOptions: { grayscale: true }
            )
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

const IndexPage = props => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      <Seo
        title="Goodnews Sandy 
      Portfolio"
      />
      {loading ? (
        <div className="loader-container bg-secondary">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          <Header />
          <Profile />
          <Aboutme />
          <Projects imagedata={props} />
          <Footer />
        </>
      )}
    </>
  )
}

export default IndexPage
