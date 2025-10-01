import { Outlet } from "react-router-dom";
import Header from "../components/Headers";
import Sidebar from "../components/Sidebar";


export default function DefaultLayout() {
  return (
    <>
      <Header />

      <main >
        <div className="container-fluid">

          <div className="row bg-light">
            <div className="col-3 col-sm-2 d-flex justify-content-center d-md-block d-sm-none d-xs-none" style={{ width: '120px', boxShadow: '2px 0px 0 var(--br-primary)' }}>
              <Sidebar />
            </div>

            <div className="col-10">
              <Outlet />
            </div>
          </div>
        </div>
      </main>

    </>
  )
}