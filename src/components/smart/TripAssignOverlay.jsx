import TripAssignOverlayUi from "../dumb/TripAssignOverlay.ui"
import { useTripContext } from "../../contexts/TripContext"
import { useParams } from "react-router-dom"
import { useEffect } from "react"

export default function TripAssignOverlay({ setDisplay }) {

    const { data, setData } = useTripContext()
    const { id } = useParams()
    const userId = Number(id)

    function handleChangeTrip(tripId) {
        //variabile di appoggio per recuperare l'utente
        let movedUser = null;

        // Rimuovere l'utente dal viaggio in cui si trova attualmente
        const dataWithoutUser = data.map(trip => {
            const nuoviPartecipanti = trip.partecipanti.filter(user => {
                if (user.id == userId) {
                    movedUser = user;
                    return false;
                }
                return true;
            });

            return {
                ...trip,
                partecipanti: nuoviPartecipanti
            };
        });

        if (!movedUser) {
            console.log("Utente non trovato.");
            return;
        }

        // Aggiungiamo l'utente al nuovo viaggio
        const updatedData = dataWithoutUser.map(trip => {
            if (trip.id == tripId) {
                return {
                    ...trip,
                    partecipanti: [...trip.partecipanti, movedUser]
                };
            }
            return trip;
        });

        setData([...updatedData]);
        setDisplay(false);

    }

    useEffect(() => {
        console.log(data);

    }, [data])

    return (
        <>
            <TripAssignOverlayUi setDisplay={setDisplay} trips={data} onclick={handleChangeTrip} />
        </>
    )
}