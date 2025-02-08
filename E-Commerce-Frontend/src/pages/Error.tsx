import { Link } from "react-router-dom"
const Error = () => {
  return (
    <div>Error
      <Link to={"/"} replace={true}>Return</Link>
    </div>
  )
}

export default Error