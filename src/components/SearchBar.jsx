import { useTripContext } from "../contexts/TripContext";

export default function SearchBar() {
  const { searchQuery, setSearchQuery } = useTripContext();

  return (
    <form className="" role="search">
      <input
        className="form-control"
        type="search"
        placeholder="Cerca..."
        aria-label="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </form>
  );
}