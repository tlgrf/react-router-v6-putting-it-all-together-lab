import { useParams, useOutletContext, Link, Outlet } from "react-router-dom"

function DirectorCard() {
  const { id } = useParams()
  const { directors } = useOutletContext()

  const director = directors.find(d => d.id === id || d.id === parseInt(id))

  if (!director) {
    return <h2>Director not found.</h2>
  }

  return (
    <div>
      <h2>{director.name}</h2>
      <p>{director.bio}</p>
      <h3>Movies:</h3>
      <ul>
        {director.movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="movies/new">Add Movie</Link>
      {/* this is where movie routes will render */}
      <Outlet context={director} />
    </div>
  )
}

export default DirectorCard