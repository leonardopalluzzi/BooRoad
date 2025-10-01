export default function UserListUi({ userList, handleSort, sortDirection, deleteUser, navigate }) {

    return (
        <>
            <div className="container mt-4">
                <h1 className="my-3">Elenco Utenti</h1>
                <hr />

                <div className="table-responsive">
                    <table className="table table-sm table-striped">
                        <thead>
                            <tr>
                                <th
                                    scope="col"
                                    className="d-flex gap-1 col-sm-8"
                                    onClick={handleSort}
                                    style={{ cursor: "pointer" }}
                                >
                                    Cognome{" "}
                                    {sortDirection === "asc" ? (
                                        <i className="bi bi-chevron-down"></i>
                                    ) : (
                                        <i className="bi bi-chevron-up"></i>
                                    )}
                                </th>
                                <th scope="col">Nome</th>
                                <th scope="col">Mail</th>
                                <th scope="col">Telefono</th>
                                <th scope="col">Codice Fiscale</th>
                                <th scope="col">Contatto di Emergenza</th>
                                <th scope="col">Relazione</th>
                                <th scope="col">Telefono Emergenza</th>
                                <th scope="col">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userList.map((user) => (
                                <tr key={user.codiceFiscale}>
                                    <td>{user.cognome}</td>
                                    <td scope="row">{user.nome}</td>
                                    <td>{user.email}</td>
                                    <td>{user.telefono}</td>
                                    <td>{user.codiceFiscale}</td>
                                    <td>{user.contattoEmergenza.nome}</td>
                                    <td>{user.contattoEmergenza.relazione}</td>
                                    <td>{user.contattoEmergenza.telefono}</td>
                                    <td>
                                        <div className="button_container d-flex gap-2">
                                            <button onClick={() => navigate(`/${user.id}/edit`)} className=" btn btn-actions btn-warning">Edit</button>
                                            <button onClick={() => deleteUser(user.id)} className="btn btn-actions btn-danger">Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}