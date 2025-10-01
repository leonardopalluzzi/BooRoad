export default function AddTripFrom({ onSubmit, newTrip, onChange, message }) {
    return (
        <>

            <div className="form_jumbotron container d-flex justify-content-center align-items-center flex-column">
                <h1 className="my-4">Aggiungi nuovo viaggio</h1>
            </div>

            <div className="container mb-5">
                <form onSubmit={(e) => { e.preventDefault(); onSubmit() }} className="form-control p-4" action="">



                    <label htmlFor="nome mb-2"> Nome Viaggio</label>
                    <input
                        className="form-control mb-3"
                        name="nome"
                        type="text"
                        value={newTrip.nome}
                        onChange={(e) => onChange(e.target.name, e.target.value)} required />


                    <label htmlFor="citta mb-2">Destinazione</label>
                    <input className="form-control mb-3"
                        name="città"
                        type="text"
                        value={newTrip.città}
                        onChange={(e) => onChange(e.target.name, e.target.value)} required />

                    <label htmlFor="immagine mb-2"> Carica immagine</label>
                    <input
                        className="form-control mb-3"
                        name="immagine"
                        type="text"
                        value={newTrip.immagine}
                        onChange={(e) => onChange(e.target.name, e.target.value)} required />

                    <div className="row row-cols-2">
                        <div className="col">
                            <label htmlFor="dataInizio">Dal:</label>
                            <input
                                className="form-control mb-3"
                                name="dataInizio"
                                type="date"
                                value={newTrip.dataInizio}
                                onChange={(e) => onChange(e.target.name, e.target.value)} required />
                        </div>

                        <div className="col">
                            <label htmlFor="dataFine">Al:</label>
                            <input className="form-control mb-3"
                                name="dataFine"
                                type="date"
                                value={newTrip.dataFine} onChange={(e) => onChange(e.target.name, e.target.value)} required />
                        </div>
                    </div>



                    <button className="btn my-3">Aggiungi viaggio</button>

                    <div className={message.state == 'success' ? 'text-success' : 'text-danger'}>
                        <span>{message.state}</span>
                        <span>{message.message}</span>
                    </div>

                </form >
            </div >
        </>
    )
}