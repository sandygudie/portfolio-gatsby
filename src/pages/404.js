import { Link } from "gatsby"
import * as React from "react"

const NotFoundPage = () => (
  <div className="w-5/6 fixed left-2/4 top-2/4 text-2xl font-bold translate-x-2/4 translate-y-2/4">
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Link className="text-red-500 text-sm" to="/">
      {" "}
      Return to Home Page
    </Link>
  </div>
)

export default NotFoundPage
