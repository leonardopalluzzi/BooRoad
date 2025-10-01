import ChangeUserFormUi from "../dumb/ChangeUserForm.ui"
import { useParams } from "react-router-dom"
import { useTripContext } from "../../contexts/TripContext"
import { useState, useEffect } from "react"

export default function ChangeUserForm() {


    const { id } = useParams()
    const { data, setData } = useTripContext()

    const [user, setUser] = useState(findUser())
    const [emergency, setEmergency] = useState(findEmergency())
    const [message, setMessage] = useState({
        state: '',
        message: ''
    })


    const [userTrips, setUserTrips] = useState(data.filter(item => item.partecipanti.some(part => part.codiceFiscale == user.codiceFiscale)))

    useEffect(() => {
        const updatedUserTrips = data.filter(item => item.partecipanti.some(part => part.codiceFiscale == user.codiceFiscale))

        setUserTrips(updatedUserTrips)
    }, [data])

    //find the user by creating a users flat array and comparing user id
    function findUser() {
        const usersList = data.flatMap(item => item.partecipanti)
        const userFound = {
            id: usersList.find(user => user.id == id).id,
            nome: usersList.find(user => user.id == id).nome,
            cognome: usersList.find(user => user.id == id).cognome,
            codiceFiscale: usersList.find(user => user.id == id).codiceFiscale,
            email: usersList.find(user => user.id == id).email,
            telefono: usersList.find(user => user.id == id).telefono,
        }
        return userFound
    }

    function findEmergency() {
        const usersList = data.flatMap(item => item.partecipanti)
        console.log(usersList);

        const emergencyFound = usersList.find(user => user.id == id).contattoEmergenza;

        return emergencyFound
    }

    function findTripByUserId(userId) {
        const trip = data.find(trip =>
            trip.partecipanti.some(user => user.id == userId)
        );
        return trip;
    }

    console.log(user);
    console.log(emergency);



    function handleChangeUser(key, value) {
        setUser({
            ...user,
            [key]: value
        })

    }

    function handleChangeEmergency(key, value) {
        setEmergency({
            ...emergency,
            [key]: value
        })

    }

    function handleSubmit() {
        console.log('submit');



        const userToPush = {
            ...user,
            contattoEmergenza: emergency
        }

        const userTrip = findTripByUserId(userToPush.id)

        if (!userTrip) {
            console.log('nessun viaggio trovato per l"utente');
            return
        }

        const updatedTrip = {
            ...userTrip,
            partecipanti: userTrip.partecipanti.map(user => user.id == userToPush.id ? userToPush : user)
        }

        const updatedData = data.map(trip => trip.id == updatedTrip.id ? updatedTrip : trip)

        setData(updatedData);

        console.log(userToPush);

        setMessage({
            state: 'success',
            message: 'User Updates Correctly'
        })
    }


    return (
        <>
            <ChangeUserFormUi
                onChangeUser={handleChangeUser}
                onChangeEmergency={handleChangeEmergency}
                user={user}
                emergency={emergency}
                onSubmit={handleSubmit}
                userTrips={userTrips}
                message={message}
            />
        </>
    )
}