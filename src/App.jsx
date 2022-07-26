import { useState, useEffect } from 'react'
import './App.css'
import CheckList from './CheckList/CheckList'
import Contador from './Contador/Contador'

function App() {
  // const password = 'rostrovital01'
  const password = '123'
  const [statePassword, setStatePassword] = useState(false)


  const handleChangePassword = (e) => {
    if(e.target.value === password) {
      setStatePassword(true)
      localStorage.setItem('password', password)
    }
  }

  useEffect(() => {
    if(localStorage.getItem('password')) {
      setStatePassword(localStorage.getItem('password') === password)
    }
  }
  , [])

  return (
    <div id='containerMain'>
    {!statePassword ? (
      <>

        <h1 id='Titulo'>Bienvenida<span id='spanTitulo'>Rostro Vital</span></h1>
        <span id='spanMensajeLindo'>Es momento de cuidarte, este planner fue creado con mucho amor para ti.</span>
        <span id='passwordH2'>Ingresa tu contraseña</span>
        <input type='password' onChange={handleChangePassword} id='inputPassword'></input>
      </>
    ) : (
      <>
        {/* <Contador/> */}
        <CheckList/>
      </>
    )
      }

    </div>
  )
}

export default App
