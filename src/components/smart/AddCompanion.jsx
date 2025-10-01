import CompanionEditCardUi from "../dumb/CompanionEditCard.ui"
import { useState } from "react"

export default function AddCompanion({ tripId, data, setData, message, title, buttonText }) {

    const [companion, setCompanion] = useState({
        nome: '',
        cognome: '',
        email: '',
        telefono: ''

    })

    function handleUpdate(key, value) {
        setCompanion({
            ...companion,
            [key]: value
        })

    }

    function handleSubmit() {
        console.log('submit');

        const companionToPush = companion

        const companionsList = data.flatMap(trip => trip.accompagnatori)

        const newId = companionsList.reduce((max, item) => (item.id > max ? item.id : max), 0) + 1;
        companionToPush.id = newId

        const currentTrip = data.find(trip => trip.id == tripId)


        const updadtedCompanions = [...currentTrip.accompagnatori, companionToPush]

        const udpatedTrip = {
            ...currentTrip,
            accompagnatori: updadtedCompanions
        }

        const updatedData = data.map(trip => trip.id == tripId ? udpatedTrip : trip)

        setData(updatedData)
        setCompanion({
            nome: '',
            cognome: '',
            email: '',
            telefono: ''
        })
    }

    return (
        <>
            <CompanionEditCardUi
                title={title}
                buttonText={buttonText}
                onchange={handleUpdate}
                onsubmit={handleSubmit}
                companion={companion}
                message={message}
                tripId={tripId}
            />
        </>
    )
}