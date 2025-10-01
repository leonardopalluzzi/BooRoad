export default function TripAssignOverlayUi({ setDisplay, trips, onclick }) {
    return (
        <>
            <div className="container overlay">
                <div className="card">
                    <div className="card-header">
                        <h1>Cambia il viaggio associtato a questo utente</h1>
                    </div>
                    <div className="card-body">
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
                                {trips.map(trip => (
                                    <>
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
                                                    <button onClick={() => onclick(trip.id)} className="btn btn-actions btn-warning">Seleziona</button>
                                                </div>
                                            </td>
                                        </tr>
                                    </>
                                ))}
                            </tbody>
                        </table>

                        <button
                            onClick={() => setDisplay(false)}
                            type="button"
                            class="btn btn-outline-danger"
                        >
                            Chiudi senza salvare
                        </button>

                    </div>
                </div>
            </div>
        </>
    )
}