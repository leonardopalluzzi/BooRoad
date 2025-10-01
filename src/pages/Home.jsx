import { useTripContext } from "../contexts/TripContext";
import TravelCard from "../components/TravelCard";
import { Link } from "react-router-dom";

export default function Home() {
  const { data, searchQuery } = useTripContext();

  // Filtra i viaggi in base alla query di ricerca
  const filteredTrips = data.filter(gita =>

    gita.nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
    gita.città.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="container py-5 mb-4 bg-lighter rounded-3">
        <h1 className="display-5 fw-bold">Benvenuto nella Home</h1>
        <p className="col-md-8 fs-4">Qui puoi visualizzare i viaggi</p>
      </div>

      <div className="container">
        {/* Travel cards */}
        <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4 pb-5">
          {filteredTrips.map((gita) => (
            <TravelCard
              key={gita.id}
              id={gita.id}
              image={gita.immagine}
              travelName={gita.nome}
              travelLocation={gita.città}
              partecipanti={gita.partecipanti}
              dataInizio={gita.dataInizio}
              dataFine={gita.dataFine}
              accompagnatori={gita.accompagnatori}
            />
          ))}
        </div>
      </div>
    </>
  );
}