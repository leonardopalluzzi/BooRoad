import { useParams } from "react-router-dom"
import { useTripContext } from "../contexts/TripContext"
import { useState, useEffect } from "react"
import UserListUi from "../components/dumb/UserList.ui"
import { useNavigate } from "react-router-dom"
import ChangeCompanions from "../components/smart/ChangeCompanions"
import AddCompanion from "../components/smart/AddCompanion"

export default function EditTrip() {

    const { data, deleteUser, searchQuery, setData } = useTripContext()

    const { id } = useParams()

    const [message, setMessage] = useState({
        state: '',
        message: ''
    })

    //destrutturare le varie tabelle dal trip
    const [currentTrip, setCurrentTrip] = useState(data.find(item => item.id == id))
    const [currentUsers, setCurrentUsers] = useState(data.find(item => item.id == id).partecipanti)
    const [currentCompanions, setCurrentCompanions] = useState(data.find(item => item.id == id).accompagnatori)

    const [sortDirection, setSortDirection] = useState("asc");
    const [filteredUsers, setFilteredUsers] = useState(currentUsers
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
        }))


    useEffect(() => {
        const updatedTrip = data.find(item => item.id == id);
        setCurrentTrip(updatedTrip);
        setCurrentUsers(updatedTrip.partecipanti);
        setCurrentCompanions(updatedTrip.accompagnatori);
    }, [data, id]);

    useEffect(() => {
        setCurrentCompanions(data.find(item => item.id == id).accompagnatori)

        const refreshUsers = currentUsers
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
            })
        setFilteredUsers(refreshUsers)
    }, [data, searchQuery, sortDirection, currentUsers])

    //search filter


    const navigate = useNavigate()

    function handleSort() {
        setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    }

    console.log(filteredUsers);


    //onchange logic
    function handleChangeTrip(key, value) {

        setCurrentTrip({
            ...currentTrip,
            [key]: value
        })
    }

    //sull'onsubmit ricreare l'array e pusharlo
    function handleSubmit() {
        console.log('submit');

        const tripToPush = {
            ...currentTrip,
        }

        const updatedData = data.map(trip => trip.id == currentTrip.id ? tripToPush : trip)

        setData(updatedData)

        setMessage({
            state: 'success',
            message: 'Trip Update Correctly'
        })
        console.log(data);
    }

    return (
        <>
            <div className="container">
                <div className="card my-4">
                    <div className="card-body">
                        <form onSubmit={(e) => { e.preventDefault(); handleSubmit() }} action="">
                            <div className="row row-cols-1">
                                <div className="col edit_info">
                                    <h1>Modifica i dettagli del viaggio: </h1>
                                    <label className="edit_label" htmlFor="">Nome</label>
                                    <input
                                        onChange={(e) => handleChangeTrip(e.target.name, e.target.value)}
                                        value={currentTrip.nome}
                                        name="nome"
                                        className="edit_input"
                                        placeholder="nome"
                                        type="text"
                                    />

                                    <label className="edit_label" htmlFor="">Citta</label>
                                    <input
                                        onChange={(e) => handleChangeTrip(e.target.name, e.target.value)}
                                        value={currentTrip.città}
                                        name="città"
                                        className="edit_input"
                                        placeholder="citta"
                                        type="text"
                                    />

                                    <label className="edit_label" htmlFor="">Data Inizio</label>
                                    <input
                                        onChange={(e) => handleChangeTrip(e.target.name, e.target.value)}
                                        value={currentTrip.dataInizio}
                                        name="dataInizio"
                                        className="edit_input"
                                        placeholder="data inizio"
                                        type="date"
                                    />

                                    <label className="edit_label" htmlFor="">Data Fine</label>
                                    <input
                                        onChange={(e) => handleChangeTrip(e.target.name, e.target.value)}
                                        value={currentTrip.dataFine}
                                        name="dataFine"
                                        className="edit_input"
                                        placeholder="data fine"
                                        type="date"
                                    />

                                    <label className="edit_label" htmlFor="">Immagine</label>
                                    <input
                                        onChange={(e) => handleChangeTrip(e.target.name, e.target.value)}
                                        value={currentTrip.immagine}
                                        name="immagine"
                                        className="edit_input"
                                        placeholder="immagine"
                                        type="text"
                                    />
                                </div>
                            </div>
                            {message.state == 'success' ? (
                                <>
                                    <div className="text-success mt-4">
                                        <span htmlFor="">{message.state}: </span>
                                        <span>{message.message}</span>
                                    </div>

                                </>
                            ) : (<></>)}
                            <button type="submit" className="btn my-4">Salva Modifiche</button>
                        </form>
                    </div>

                </div>

                <div className="card my-4">
                    <div className="card-body">
                        <div className="col edit_info">
                            <h1>Modifica i dettagli degli accompagnatori:</h1>
                            <div className="row row-cols-2">
                                {currentCompanions.length < 2 ? (<>
                                    {currentCompanions.map(item => (
                                        <>
                                            <ChangeCompanions
                                                title={'Info Accompagnatore'}
                                                buttonText={'Salva Modifiche'}
                                                id={id}
                                                key={item.id}
                                                item={item}
                                            />
                                        </>
                                    ))}
                                    <AddCompanion
                                        title={'Aggiungi un Accompagnatore'}
                                        buttonText={'Aggiungi'}
                                        data={data}
                                        tripId={id}
                                        setData={setData}
                                        message={message}
                                    />
                                </>) :
                                    currentCompanions.map(item => (
                                        <>
                                            <ChangeCompanions
                                                title={'Info Accompagnatore'}
                                                buttonText={'Salva Modifiche'}
                                                id={id}
                                                key={item.id}
                                                item={item}
                                            />
                                        </>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card my-4">
                    <div className="card-body">
                        <div className="col edit_info">
                            <h1>Modifica i partecipanti:</h1>
                            <UserListUi
                                userList={filteredUsers}
                                handleSort={handleSort}
                                sortDirection={sortDirection}
                                deleteUser={deleteUser}
                                navigate={navigate}
                            />
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}