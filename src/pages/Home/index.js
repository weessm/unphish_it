import { useState } from 'react';
import {useHistory} from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'
import './style.css'

function Home() {
  const [search, setSearch] = useState("")
  const history = useHistory()

  function handleSubmit(event){
    event.preventDefault()
    history.push({
      pathname: "Result",
      search: `search=${search}`
    })
  }

  return (
    <div className="App">
      <div className="container center">
        <h1>Unphish-It</h1>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div id="search-input-container">
            <label htmlFor="search">Buscar Página Suspeita</label>
            <input
              type="text"
              name="search"
              id="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Pesquise por uma página suspeita"
            />
            <button type="submit">
              <FaSearch color="#FFF" size="2.5rem"/>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;
