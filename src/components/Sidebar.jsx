import { Link } from "react-router-dom"

export default function Sidebar() {
  return (

    <nav className="nav nav-dark d-flex flex-column gap-4 d-none d-md-block" id="sidebar">
      <Link to='/' className="nav-link home text-center text-decoration-none mt-5">
        <i className="bi bi-house fs-3"></i>
        <p>Home</p>
      </Link>

      <Link to='/dashboard' className="nav-link dashboard text-center text-decoration-none" >
        <i className="bi bi-speedometer2 fs-3"></i>
        <p>Dashboard</p>
      </Link>




    </nav>



  )
}