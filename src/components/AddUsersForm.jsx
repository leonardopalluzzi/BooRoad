export default function AddUsersForm({ onSubmit, newUser, emergencyContact, onChangeUser, onChangeEmergency, message }) {
    return (
        <>
            <div className="container my-4">
                <p class="d-inline-flex gap-1">
                    <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Aggiungi Partecipante
                    </button>
                </p>

                <div class="collapse" id="collapseExample">

                    <div className="container">
                        <h1 className="my-4">Aggiungi un partecipante</h1>

                        <form onSubmit={(e) => { e.preventDefault(); onSubmit() }} className="form-control p-4" action="">

                            <label htmlFor="nome mb-2"> Nome Partecipante</label>
                            <input
                                className="form-control mb-3"
                                name="nome"
                                type="text"
                                value={newUser.nome}
                                onChange={(e) => onChangeUser(e.target.name, e.target.value)} required />


                            <label htmlFor="citta mb-2">Cognome Partecipante</label>
                            <input className="form-control mb-3"
                                name="cognome"
                                type="text"
                                value={newUser.cognome}
                                onChange={(e) => onChangeUser(e.target.name, e.target.value)} required />

                            <label htmlFor="immagine mb-2"> Email Partecipante</label>
                            <input
                                className="form-control mb-3"
                                name="email"
                                type="email"
                                value={newUser.email}
                                onChange={(e) => onChangeUser(e.target.name, e.target.value)} required />

                            <label htmlFor="immagine mb-2"> Telefono Partecipante</label>
                            <input
                                className="form-control mb-3"
                                name="telefono"
                                type="text"
                                value={newUser.telefono}
                                onChange={(e) => onChangeUser(e.target.name, e.target.value)} required />

                            <label htmlFor="immagine mb-2"> Codice fiscale Partecipante</label>
                            <input
                                className="form-control mb-3"
                                name="codiceFiscale"
                                type="text"
                                value={newUser.codiceFiscale}
                                onChange={(e) => onChangeUser(e.target.name, e.target.value)} required />


                            <form action="">
                                <h4>Contatto di emergenza</h4>

                                <div className="row row-cols-3">
                                    <div className="col">
                                        <label htmlFor="dataInizio">Nome</label>
                                        <input
                                            className="form-control mb-3"
                                            name="nome"
                                            type="text"
                                            value={emergencyContact.nome}
                                            onChange={(e) => onChangeEmergency(e.target.name, e.target.value)} required />
                                    </div>

                                    <div className="col">
                                        <label htmlFor="dataInizio">Telefono</label>
                                        <input
                                            className="form-control mb-3"
                                            name="telefono"
                                            type="text"
                                            value={emergencyContact.telefono}
                                            onChange={(e) => onChangeEmergency(e.target.name, e.target.value)} required />
                                    </div>

                                    <div className="col">
                                        <div className="col">
                                            <label htmlFor="dataInizio">Relazione</label>
                                            <input
                                                className="form-control mb-3"
                                                name="relazione"
                                                type="text"
                                                value={emergencyContact.relazione}
                                                onChange={(e) => onChangeEmergency(e.target.name, e.target.value)} required />
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <button className="btn my-3">Aggiungi partecipante</button>

                            <div className={message.state == 'success' ? 'text-success' : 'text-danger'}>
                                <span>{message.state}</span>
                                <span>{message.message}</span>
                            </div>

                        </form >
                    </div >
                </div>
            </div>
        </>
    )
}