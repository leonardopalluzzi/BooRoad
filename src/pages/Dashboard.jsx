import TripTable from "../components/TripTable";
import { useTripContext } from "../contexts/TripContext";
import { useState } from "react";
import UserListUi from "../components/dumb/UserList.ui";
import { useNavigate } from "react-router-dom";


export default function Dashboard() {

  const { data, searchQuery, deleteUser } = useTripContext();
  console.log(data);

  const [sortDirection, setSortDirection] = useState("asc");

  const navigate = useNavigate()

  function handleSort() {
    setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
  }

  const filteredUsers = data
    .flatMap((trip) => trip.partecipanti)
    .filter((user) =>
      `${user.nome} ${user.cognome}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortDirection === "asc") {
        return a.cognome.localeCompare(b.cognome);
      } else {
        return b.cognome.localeCompare(a.cognome);
      }
    });


  return (
    <>
      <div className="container py-5 mb-4 bg-lighter rounded-3">
        <h1 className="display-5 fw-bold">Benvenuto nella Dashboard</h1>
        <p className="col-md-8 fs-4">Qui puoi gestire gli utenti e i viaggi</p>
      </div>


      {/* add trip table */}
      <TripTable />

      <UserListUi
        userList={filteredUsers}
        handleSort={handleSort}
        sortDirection={sortDirection}
        deleteUser={deleteUser}
        navigate={navigate}
      />
    </>

  )
}