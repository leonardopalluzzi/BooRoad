import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Header() {

  return (
    <>


      <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded-bottom" id="header">
        <div class="container-fluid">
          <div className="logo">


            <Link to="/" className="navbar-brand ms-3 ">
              <img src="/images/logo.png" style={{ width: "100px", maxHeight: '80px' }} alt="Logo" />
            </Link>
          </div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>



          <div className="collapse navbar-collapse  " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-felx justify-content-center">
              <li className="nav-item w-50">



                <SearchBar />

              </li>
              <li className="nav-item d-block d-md-none">
                <Link to='/' className="text-decoration-none text-white link">Home</Link>
              </li>
              <li className="nav-item d-block d-md-none ">
                <Link to='/dashboard' className="text-decoration-none text-white link">Dashboard</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>


    </>




  );
}