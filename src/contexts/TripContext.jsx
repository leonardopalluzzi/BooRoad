import { createContext, useContext, useState } from "react";
import trips from '../data/data';

const TripContext = createContext();

function TripProvider({ children }) {
    const [data, setData] = useState(trips);
    const [searchQuery, setSearchQuery] = useState(""); // Stato per la ricerca


    function deleteUser(id) {
        console.log('delete');
        let deletedUser = null;

        const updatedData = data.map(item => {
            const nuoviPartecipanti = item.partecipanti.filter(user => {
                if (user.id === id) {
                    deletedUser = user;
                    return false; // lo escludiamo
                }
                return true; // lo manteniamo
            });

            return {
                ...item,
                partecipanti: nuoviPartecipanti
            };
        });

        if (deletedUser) {
            console.log("User deleted:", deletedUser);
        } else {
            console.log("User not found.");
        }

        setData(updatedData);
    }



    function deleteTrip(id) {
        console.log('delete');

        const updatedData = data.filter(item => item.id !== id)
        setData(updatedData)
    }

    function deleteCompanion(companionId, tripId) {
        console.log('delete');

        console.log(companionId, Number(tripId));


        const currentTrip = data.find(trip => trip.id == Number(tripId))

        const updatedCompanion = currentTrip.accompagnatori.filter(item => item.id !== companionId)

        const updatedTrip = {
            ...currentTrip,
            accompagnatori: updatedCompanion
        }

        const updatedData = data.map(item => item.id == updatedTrip.id ? updatedTrip : item)
        console.log(updatedData);

        setData(updatedData)
        console.log('submit');

    }

    return (

        <TripContext.Provider value={{ data, setData, deleteCompanion, deleteTrip, deleteUser, searchQuery, setSearchQuery }}>
            {children}
        </TripContext.Provider>
    );
}

function useTripContext() {
    return useContext(TripContext);
}

export { TripProvider, useTripContext };