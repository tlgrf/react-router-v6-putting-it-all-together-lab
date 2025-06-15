import { useOutletContext } from "react-router-dom"
import { Link } from "react-router-dom"

const DirectorList = () => {
  const { directors } = useOutletContext()

  // rendering each director as a link to their detail page
  const displayDirectors = directors.map(d => (
    <li key={d.id}>
      <Link to={`/directors/${d.id}`}>{d.name}</Link>
    </li>
  ))

  return <ul>{displayDirectors}</ul>
}

export default DirectorList