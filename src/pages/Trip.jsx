import { useTripContext } from "../contexts/TripContext";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import User from "../components/UserCard.jsx";
import AddUsersForm from "../components/AddUsersForm.jsx";
import Companions from "../components/Companions.jsx";

export default function Trip() {
  const { data, setData } = useTripContext();

  const { id } = useParams();
  console.log(id);

  console.log(data);


  const [tripName, setTripName] = useState(data.find(trip => trip.id == id))

  console.log(tripName);


  const [searchUser, setSearchUser] = useState("");
  const [UserList, setUserList] = useState([]);

  useEffect(() => {
    const updatedTrip = data.find(trip => trip.id == id);
    setTripName(updatedTrip);
  }, [data, id])
  useEffect(() => {
    if (tripName) {
      setUserList(tripName.partecipanti);
    }
  }, [tripName]);

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchUser(searchValue);

    const filteredUsers = tripName.partecipanti.filter((user) => {
      return (
        user.nome.toLowerCase().includes(searchValue) ||
        user.cognome.toLowerCase().includes(searchValue)
      );
    });

    setUserList(filteredUsers);
  };



  //logic for add users form

  const [newUser, setNewUser] = useState({
    id: null,
    nome: "",
    cognome: "",
    email: "",
    telefono: "",
    codiceFiscale: "",
  })

  const [emergencyContact, setEmergencyContact] = useState({
    nome: "",
    telefono: "",
    relazione: ""
  })

  const [message, setMessage] = useState('')


  function handleChangeUser(key, value) {
    setNewUser({
      ...newUser,
      [key]: value
    })

  }

  function handleChangeEmergency(key, value) {
    setEmergencyContact({
      ...emergencyContact,
      [key]: value
    })

  }

  function handleSubmit() {
    console.log('submit');

    const trip = data.find(trip => trip.id === Number(id))

    if (!trip) {
      return setMessage({
        state: 'error',
        message: (
          <>
            <i className="bi bi-arrow-bar-right"></i> Trip not found
          </>
        )
      })
    }

    //create new id
    const usersList = data.flatMap(item => item.partecipanti)

    const newId = usersList.reduce((max, item) => (item.id > max ? item.id : max), 0) + 1;
    newUser.id = newId

    //value cehck
    const checkUser = trip.partecipanti.find(item => item.codiceFiscale == newUser.codiceFiscale)
    console.log(checkUser);
    if (checkUser) {
      setNewUser({
        id: null,
        nome: "",
        cognome: "",
        email: "",
        telefono: "",
        codiceFiscale: "",
      })
      setEmergencyContact({
        nome: "",
        telefono: "",
        relazione: ""
      })
      return setMessage({
        state: 'error',
        message: (
          <>
            <i className="bi bi-arrow-bar-right"></i> User already exists
          </>
        )
      })
    }

    //update the array

    if (!emergencyContact.nome || !emergencyContact.telefono || !emergencyContact.relazione) {
      return setMessage({
        state: 'error',
        message: (
          <>
            <i className="bi bi-arrow-bar-right"></i> Please add an emergency contact for this user
          </>
        )


      })
    } else if (emergencyContact.telefono == newUser.telefono) {
      return setMessage({
        state: 'error',
        message: (
          <>
            <i className="bi bi-arrow-bar-right"></i> The emergency contact needs to be different from the user
          </>
        )
      })
    }

    //create user to push with emergency contact
    const userToPush = {
      ...newUser,
      contattoEmergenza: emergencyContact
    }

    const updatedTrips = data.map(trip => {
      if (trip.id === Number(id)) {
        return {
          ...trip,
          partecipanti: [...trip.partecipanti, userToPush]
        }
      }
      return trip
    })

    setData(updatedTrips)
    console.log(data);

    //empty the input values after push
    setNewUser({
      id: null,
      nome: "",
      cognome: "",
      email: "",
      telefono: "",
      codiceFiscale: "",
    })
    setEmergencyContact({
      nome: "",
      telefono: "",
      relazione: ""
    })
    return setMessage({
      state: 'success',
      message: 'User added correctly'
    })
  }

  return (
    <>
      <div className="jumbotron d-flex justify-content-center align-items-center flex-column">
        <h3 className="mt-3">{tripName.nome}</h3>
        <img
          className="img-fluid rounded-3 object-fit-cover object-fit-center"
          src={tripName.immagine}
          style={{ width: "85%", height: "550px", marginTop: "10px", marginBottom: "10px" }}
          onError={(e) => { e.target.onerror = null; e.target.src = "/images/placeholder.jpg"; }}
        />
        <p>
          🗓️ {new Date(tripName.dataInizio).toLocaleDateString('it-IT')} - {new Date(tripName.dataFine).toLocaleDateString('it-IT')}
        </p>
        <p>📍 Location: {tripName.città}</p>
        <p>👤 Partecipanti: {tripName.partecipanti.length}</p>
        <p>👤 accompagnatori: </p>
        <div className="container w-100">
          {tripName.accompagnatori.map(item => (
            <>
              <div key={`companion-${item.id}`} className="accordion" id="compAccordion">
                <Companions
                  id={`comp-${item.id}`}
                  nome={item.nome}
                  cognome={item.cognome}
                  email={item.email}
                  telefono={item.telefono}
                />
              </div>
            </>
          ))}
        </div>
      </div>

      <AddUsersForm
        onSubmit={handleSubmit}
        newUser={newUser}
        emergencyContact={emergencyContact}
        onChangeUser={handleChangeUser}
        onChangeEmergency={handleChangeEmergency}
        message={message}

      />

      <div className="container mt-4 pb-4">
        <h4>Ricerca Partecipanti</h4>

        <input
          type="text"
          className="form-control"
          placeholder="Cerca Partecipante"
          value={searchUser}
          onChange={handleSearch}
        />


        <div className="accordion mt-3" id="usersAccordion">
          {UserList.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </div>
      </div>
    </>
  );
}
