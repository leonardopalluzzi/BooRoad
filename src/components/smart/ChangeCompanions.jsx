import { useState, useEffect } from "react"
import { useTripContext } from "../../contexts/TripContext"
import CompanionEditCardUi from "../dumb/CompanionEditCard.ui"

export default function ChangeCompanions({ item, id, title, buttonText }) {

    const { data, setData } = useTripContext()

    const [companion, setCompanion] = useState(item)
    const [message, setmessage] = useState({
        state: '',
        message: ''
    })

    function handleChangeCompanions(key, value) {
        setCompanion({
            ...companion,
            [key]: value
        })
    }

    function handleSubmit() {

        //rimappare l'array generale con i nuovi dati
        const currentTrip = data.find(trip => trip.id == id)
        const updatedCompanions = currentTrip.accompagnatori.map(item => item.id == companion.id ? companion : item)

        const updatedTrip = {
            ...currentTrip,
            accompagnatori: updatedCompanions
        }

        const updatedData = data.map(trip => trip.id == updatedTrip.id ? updatedTrip : trip)
        //settare l'array con il setter

        setData(updatedData)

        setmessage({
            state: 'success',
            message: 'Companion updated correctly'
        })

    }

    useEffect(() => {
        console.log(data);
    }, [data])

    return (
        <>
            <CompanionEditCardUi
                title={title}
                buttonText={buttonText}
                onchange={handleChangeCompanions}
                onsubmit={handleSubmit}
                companion={companion}
                message={message}
                tripId={id}
            />
        </>
    )
}