import { useState } from "react"
import TripAssignOverlay from "../smart/TripAssignOverlay"

export default function UserTripListUi({ userTrips }) {

    const [display, setDisplay] = useState(false)

    return (
        <>
            <div className="container">

                <div className="table-responsive">
                    <div className="d-flex justify-content-between">
                        <h1 className="my-3">Elenco Viaggi Utente</h1>
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
                                userTrips.map((trip) => {
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
                                            <td>{trip.dataInizio}</td>
                                            <td>{trip.dataFine}</td>
                                            <td className="text-center">{trip.partecipanti.length}</td>
                                            <td>
                                                <div className="button_container d-flex gap-2 justify-content-center bg-transparent">
                                                    <button onClick={() => setDisplay(true)} className="btn btn-actions btn-warning">Change Trip Assingation</button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    {display == true ? (<>
                        <TripAssignOverlay
                            setDisplay={setDisplay}
                        />
                    </>) : (<></>)}
                </div>
            </div>
        </>
    )
}