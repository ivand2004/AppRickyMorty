import { useEffect, useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'
import Favorites from "./components/Favorites/Favorites"
import Error from './components/Error/Error'
import { useDispatch } from 'react-redux'
import { deleteFavorite } from './redux/actions'
// import characters, { Rick } from './data.js'

function App () {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate()
  const [access, setAccess] = useState(false);
  const location = useLocation()
  let username = "ivandaicich@gmail.com"
  let password = "psw1234"

  function login(userData){
    if(userData.username === username && userData.password === password){
      setAccess(true);
      navigate("/home");
    } else{
      alert("Usuario y/o contraseña incorrectos. Intenta de nuevo")
    }
  }
  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             if(characters.findIndex(c => c.id === data.id) === -1){ // CODIGO DEL EXTRA DEL 08
             setCharacters((oldChars) => [...oldChars, data]);
             }else{  // CODIGO DEL EXTRA DEL 08
              window.alert(`${data.name} ya fue agregado a la pagina`)  // CODIGO DEL EXTRA DEL 08
             } // CODIGO DEL EXTRA DEL 08
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }

 function logout(){ // Codigo del extra 09, junto con el prop logout que se pasa al Nav
    setAccess(false)
 }

  const dispatch = useDispatch(); // Codigo del extra 12

 function onClose(key){
  setCharacters(characters.filter(c => c.id !== key))
  dispatch(deleteFavorite(key)) // Codigo del extra 12, si esta en favorites, va a hacer el dispatch y lo va a sacar, si no, hace el dispatch igual y devuelve los favoritos como estaban antes.
 }
  return (
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname !== '/' && <Nav onSearch={onSearch} logout={logout}/>}  {/* Si el location.pathname es '/', login, no renderices Nav*/}
      <Routes>
        <Route path='/home' element={<Cards
          characters={characters}
          onClose ={onClose}
        />} />
        <Route path='/about' element={<About/>} />
        <Route path='/detail/:detailId' element={<Detail/>} />
        <Route path='/' element={<Form login={login}/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path='*' element={<Error/>}/> {/* Esto es del extra de 09*/}
      </Routes>
    </div>
  )
}

export default App
