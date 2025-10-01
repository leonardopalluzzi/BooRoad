import UserTripListUi from "./UserTripList.ui";

export default function ChangeUserFormUi({ onChangeUser, onChangeEmergency, user, emergency, onSubmit, userTrips, message }) {
    return (
        <>
            <div className="container">
                <div className="user_info">

                    <form onSubmit={(e) => { e.preventDefault(); onSubmit() }} action="">
                        <div className="edit_info row row-cols-2 mt-4">
                            <div className="col">
                                <h1> Info Utente: </h1>
                                <label className="edit_label" htmlFor="">Nome:</label>
                                <input
                                    onChange={(e) => onChangeUser(e.target.name, e.target.value)}
                                    value={user.nome}
                                    name="nome"
                                    className="edit_input"
                                    type="text"
                                    placeholder="Nome"
                                    required
                                />

                                <label className="edit_label" htmlFor="">Cognome:</label>
                                <input
                                    onChange={(e) => onChangeUser(e.target.name, e.target.value)}
                                    value={user.cognome}
                                    name="cognome"
                                    className="edit_input"
                                    type="text"
                                    placeholder="Cognome"
                                    required
                                />

                                <label className="edit_label">Email:</label>
                                <input
                                    onChange={(e) => onChangeUser(e.target.name, e.target.value)}
                                    value={user.email}
                                    name="email"
                                    className="edit_input"
                                    type="email"
                                    placeholder="Email"
                                    required
                                />

                                <label className="edit_label">Telefono:</label>
                                <input
                                    onChange={(e) => onChangeUser(e.target.name, e.target.value)}
                                    value={user.telefono}
                                    name="telefono"
                                    className="edit_input"
                                    type="text"
                                    placeholder="Telefono"
                                    required
                                />


                                <label className="edit_label">Codice Fiscale:</label>
                                <input
                                    onChange={(e) => onChangeUser(e.target.name, e.target.value)}
                                    value={user.codiceFiscale}
                                    name="codiceFiscale"
                                    className="edit_input"
                                    type="text"
                                    placeholder="C.F."
                                    required
                                />
                                <h4>inserire viaggi a cui l'utente e iscritto</h4>
                            </div>
                            <div className="col emergency_contact">
                                <h1>Contatto di emergenza:</h1>
                                <label className="edit_label">Nome:</label>
                                <input
                                    onChange={(e) => onChangeEmergency(e.target.name, e.target.value)}
                                    value={emergency.nome}
                                    name="nome"
                                    className="edit_input"
                                    type="text"
                                    placeholder="Nome"
                                    required
                                />


                                <label className="edit_label">Telefono:</label>
                                <input
                                    onChange={(e) => onChangeEmergency(e.target.name, e.target.value)}
                                    value={emergency.telefono}
                                    name="telefono"
                                    className="edit_input"
                                    type="text"
                                    placeholder="Telefono"
                                    required
                                />


                                <label className="edit_label">Relazione:</label>
                                <input
                                    onChange={(e) => onChangeEmergency(e.target.name, e.target.value)}
                                    value={emergency.relazione}
                                    name="relazione"
                                    className="edit_input"
                                    type="text"
                                    placeholder="Relazione"
                                    required
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn mt-4">Salva Modifiche</button>
                        <div className="container">
                            {
                                message.state == 'success' ? (
                                    <>
                                        <div className="messages text-success">
                                            <span>{message.state} </span>
                                            <span>{message.message}</span>
                                        </div>
                                    </>
                                ) : (<></>)
                            }
                        </div>

                    </form>
                    <UserTripListUi userTrips={userTrips} />
                </div>
            </div>
        </>
    )
}