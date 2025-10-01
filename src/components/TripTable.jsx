import { useTripContext } from "../contexts/TripContext.jsx";
import { useNavigate, Link } from "react-router-dom";

export default function TripTable() {

  const navigate = useNavigate()

  const { data, searchQuery, deleteTrip } = useTripContext()

  // Filtra i viaggi in base alla query di ricerca
  const filteredTrips = data.filter(gita =>
    gita.nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
    gita.città.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (

    <>
      <div className="container">

        <div className="table-responsive">
          <div className="d-flex justify-content-between">
            <h1 className="my-3">Elenco Viaggi</h1>
            {/* Add new trip */}
            <Link to="/addtrip">
              <button className="btn my-4 mx-5">+ Nuovo Viaggio</button>
            </Link>
          </div>

          <hr />

          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead className="table table-sm table-striped">
              <tr>
                <th>Immagine</th>
                <th>Nome</th>
                <th>Città</th>
                <th>Data Inizio</th>
                <th>Data Fine</th>
                <th className="text-center">Partecipanti</th>
                <th className="text-center">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="table table-sm table-striped">
              {
                filteredTrips.map((trip) => {
                  return (
                    <tr key={trip.id}>
                      <td>
                        <img src={trip.immagine}
                          onError={(e) => { e.target.onerror = null; e.target.src = "/images/placeholder.jpg"; }}
                          alt="travel image"
                          style={{ width: '80px', height: '50px' }} />
                      </td>
                      <td>{trip.nome}</td>
                      <td>{trip.città}</td>
                      <td>{new Date(trip.dataInizio).toLocaleDateString('it-IT')}</td>
                      <td>{new Date(trip.dataFine).toLocaleDateString('it-IT')}</td>
                      <td className="text-center">{trip.partecipanti.length}</td>
                      <td>
                        <div className="button_container d-flex gap-2 justify-content-center bg-transparent">
                          <button onClick={() => navigate(`/${trip.id}/edit-trip`)} className="btn btn-actions btn-warning">Edit</button>
                          <button onClick={() => deleteTrip(trip.id)} className="btn btn-actions btn-danger">Delete</button>
                        </div>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}