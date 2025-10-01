export default function Companions({ nome, cognome, email, telefono, id }) {
    return (
        <>

            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#comp-${id}`}>
                        {nome} {cognome}
                    </button>
                </h2>
                <div
                    id={`comp-${id}`}
                    className="accordion-collapse collapse" data-bs-parent="#compAccordion"
                >
                    <div className="accordion-body">
                        <ul>
                            <li>
                                <span>Email:</span>
                                <p>{email}</p>
                            </li>
                            <li>
                                <span>Telefono:</span>
                                <p>{telefono}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


        </>
    )
}