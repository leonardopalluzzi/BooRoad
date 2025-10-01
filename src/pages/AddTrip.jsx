import { useEffect, useState } from "react"
import { useTripContext } from "../contexts/TripContext"
import AddTripFrom from "../components/AddTripForm";

export default function AddTrip() {

  const { data, setData } = useTripContext()
  console.log(data);
  let newId = 0;

  const [newTrip, setNewTrip] = useState({
    id: null,
    immagine: "",
    nome: "",
    città: "",
    dataInizio: "",
    dataFine: "",
    partecipanti: [],
    accompagnatori: []
  })

  const [message, setMessage] = useState('')


  function handleChange(key, value) {
    setNewTrip({
      ...newTrip,
      [key]: value
    })
  }

  function handleSubmit() {
    newId = data.reduce((max, item) => (item.id > max ? item.id : max), 0) + 1;
    newTrip.id = newId

    const checkTrip = data.find(item => item.nome == newTrip.nome)
    console.log(checkTrip);
    if (checkTrip) {
      setNewTrip({
        id: null,
        immagine: "",
        nome: "",
        città: "",
        dataInizio: "",
        dataFine: "",
        partecipanti: []
      })
      return setMessage({
        state: 'error',
        message: (
          <>
            <i className="bi bi-arrow-bar-right"></i> Trip already exists
          </>
        )
      })
    }

    console.log(newTrip);
    setData([...data, newTrip])
    console.log(data);
    setNewTrip({
      id: null,
      immagine: "",
      nome: "",
      città: "",
      dataInizio: "",
      dataFine: "",
      partecipanti: []
    })
    setMessage({
      state: 'success',
      message: 'Trip added correctly'
    })
  }

  return (
    <>
      <AddTripFrom
        onSubmit={handleSubmit}
        newTrip={newTrip}
        onChange={handleChange}
        message={message}
      />
    </>
  )
}