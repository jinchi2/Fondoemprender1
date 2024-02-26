import { useState } from "react"
import { Link } from "react-router-dom"
import Alerta from "../components/Alerta"
/*import axios from 'axios'*/
import clienteAxios from "../config/clienteAxios"

const TIPO_DOCUMENTO = ['tarjeta identidad', 'cedula ciudadana', 'cedula extrajeria']

const Registrar = () => {
  const [nombre, setNombre] = useState('')
  const [apellidos, setapellidos] = useState('')
  const [numerodocumento, setNumeroDocumento] = useState('')
  const [tipoidentificacion, setTipoidentificacion] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [alerta, setAlerta] = useState({})

  const handleSubmit = async e => {
    e.preventDefault()

    if ([nombre, apellidos, numerodocumento, tipoidentificacion, email, password].includes('')) {
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return
    }
    if (password.length < 6) {
      setAlerta({
        msg: 'El password es muy corto, agrega minimo 6 carateres',
        error: true
      })
      return
    }
    setAlerta({})

    // Crear el usuario en la API

    try {
      
      const { data } = await clienteAxios.post(`/usuarios`,
        { nombre, password, apellidos, numerodocumento, tipoidentificacion, email })
        
        setAlerta({
          msg: data.msg,
          error: false
        })
        setNombre('')
        setapellidos('')
        setNumeroDocumento('')
        setTipoidentificacion('')
        setEmail('')
        setPassword('')
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }
  }
  const { msg } = alerta

  return (
    <>
      <h1 className="text-green-600 font-black text-6xl">Crea tu Cuenta {' '}
      </h1>

      {msg && <Alerta alerta={alerta} />}
      <form

        className="my-10 bg-white shadow rounded-lg p-10"
        onSubmit={handleSubmit}
      >

        <div className="my-5">
          <label
            className='uppercase text-gray-600 block text-xl font-bold'
            htmlFor="nombre"
          >Nombre</label>
          <input
            id="nombre"
            type="text"
            placeholder="nombre"
            className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>

        <div className="my-5">
          <label
            className='uppercase text-gray-600 block text-xl font-bold'
            htmlFor="usuario"
          >Apellidos</label>
          <input
            id="apellido"
            type="text"
            placeholder="apellidos"
            className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
            value={apellidos}
            onChange={e => setapellidos(e.target.value)}
          />
        </div>

        <div className="my-5">
          <label
            className='uppercase text-gray-600 block text-xl font-bold'
            htmlFor="usuario"
          >Numero Documendo</label>
          <input
            id="documendo"
            type="number"
            placeholder="escribes tu numero documendo"
            className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
            value={numerodocumento}
            onChange={e => setNumeroDocumento(e.target.value)}
          />
        </div>

        <div className="my-5">
          <label
            className='uppercase text-gray-600 block text-xl font-bold'
            htmlFor="usuario"
          >Tipo identificacion</label>
          <select
            id="identificacion"
            type="text"
            placeholder="escribes tu identificacion"
            className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
            value={tipoidentificacion}
            onChange={e => setTipoidentificacion(e.target.value)}
          >
            <option value="">-- Seleccione --</option>
            {TIPO_DOCUMENTO.map(option => (
              <option key={option}> {option}</option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label
            className='uppercase text-gray-600 block text-xl font-bold'
            htmlFor="usuario"
          >Correo Electronico</label>
          <input
            id="email"
            type="email"
            placeholder="escribe tu correo electronico"
            className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
            value={email}
            onChange={e => setEmail(e.target.value)}

          />
        </div>

        <div className="my-5">
          <label
            className='uppercase text-gray-600 block text-xl font-bold'
            htmlFor="password"
          >Password</label>
          <input
            id="password"
            type="password"
            placeholder="escribes tu password"
            className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
            value={password}
            onChange={e => setPassword(e.target.value)}

          />
        </div>

        <input
          type="submit"
          value="Registrar"
          className='bg-green-700 mb-5 w-full py-3 text-white uppercase font-bold rounded
          hover:cursor-pointer hover:bg-green-800 transition-color'
        />
      </form>

      <nav className='lg:flex lg:justify-between'>
        <Link
          className='block text-center my-5 text-slate-500 uppercase text-sm'
          to='/login'
        >¿Ya tienes cuenta? Inicia sesion </Link>

        <Link
          className='block text-center my-5 text-slate-500 uppercase text-sm'
          to='/olvidepassword'
        >¿Olvide mi Password </Link>
      </nav>

    </>

  )
}

export default Registrar
