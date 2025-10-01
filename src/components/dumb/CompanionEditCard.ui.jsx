import { useTripContext } from "../../contexts/TripContext";

export default function CompanionEditCardUi({ onchange, onsubmit, companion, message, tripId, title, buttonText }) {

    const { deleteCompanion } = useTripContext()

    return (
        <>
            <div className="col">
                <form onSubmit={(e) => { e.preventDefault(); onsubmit() }} action="">
                    <div className="card">
                        <div className="card-header">
                            <h3>{title}</h3>
                            <div className="card-body">
                                <label htmlFor="" className="edit_label">Nome:</label>
                                <input
                                    onChange={(e) => onchange(e.target.name, e.target.value)}
                                    value={companion.nome}
                                    name="nome"
                                    className="edit_input"
                                    placeholder="Nome"
                                    type="text"
                                    required
                                />

                                <label htmlFor="" className="edit_label">Cognome:</label>
                                <input
                                    onChange={(e) => onchange(e.target.name, e.target.value)}
                                    value={companion.cognome}
                                    name="cognome"
                                    className="edit_input"
                                    placeholder="Cognome"
                                    type="text"
                                    required
                                />

                                <label htmlFor="" className="edit_label">Email:</label>
                                <input
                                    onChange={(e) => onchange(e.target.name, e.target.value)}
                                    value={companion.email}
                                    name="email"
                                    className="edit_input"
                                    placeholder="Email"
                                    type="email"
                                    required
                                />

                                <label htmlFor="" className="edit_label">Telefono:</label>
                                <input
                                    onChange={(e) => onchange(e.target.name, e.target.value)}
                                    value={companion.telefono}
                                    name="telefono"
                                    className="edit_input"
                                    placeholder="Telefono"
                                    type="number"
                                    required
                                />
                            </div>
                            <div className="output">
                                {
                                    message.state == 'success' ? (
                                        <>
                                            <div className="text-success">
                                                <span>{message.state}: </span>
                                                <span>{message.message}</span>
                                            </div>
                                        </>
                                    ) : (<></>)
                                }
                            </div>
                            <div className="card-footer text-center">
                                <button type="submit" className="btn mx-4">{buttonText}</button>
                                {buttonText == 'Aggiungi' ? (<></>) : (<>
                                    <button type="button" onClick={() => deleteCompanion(companion.id, tripId)} className="btn btn-actions btn-danger my-4">Elimina Accompagnatore</button>
                                </>)}
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </>
    )
}