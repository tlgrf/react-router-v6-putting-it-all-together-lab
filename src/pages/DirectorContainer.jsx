import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';

const DirectorContainer = () => {
  const [directors, setDirectors] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then(r => {
        if (!r.ok) { throw new Error("failed to fetch directors") }
        return r.json()
      })
      .then(setDirectors)
      .catch(console.log)
  }, [])

  return (
    <>
      <NavBar />
      <main>
        <h1>Welcome to the Director's Directory!</h1>
        {/* this is where child components will show up */}
        <Outlet context={{ directors, setDirectors }} />
      </main>
    </>
  );
}

export default DirectorContainer;
