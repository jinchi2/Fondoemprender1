import {  useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Alerta from "../components/Alerta"
import clienteAxios from "../config/clienteAxios"
import useAuth from "../hooks/useAuth"

const Login = () => {
    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')
    const [alerta, setAlerta] = useState({})

    const { setAuth } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault()

        if ([usuario,password].includes('')) {
            setAlerta({
              msg: 'Todos los campos son obligatorios',
              error: true
            })
            return
        }

        try {
            const { data } = await clienteAxios.post('/usuarios/login', { email: usuario, password: password })
            setAlerta({})
            localStorage.setItem('token', data.token)
            setAuth(data)
            navigate("/proyectos")
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
      <h1 className="text-green-600 font-black text-6xl">Inicia Sesion {' '}
       </h1>
           {msg && <Alerta alerta={alerta} />}
       
       <form 
           className="my-10 bg-white shadow rounded-lg p-10"
           onSubmit={handleSubmit}
       >
            <div className="my-5">
                <label
                className='uppercase text-gray-600 block text-xl font-bold'
                htmlFor="usuario"
                >Usuario</label>
                <input
                    id="usuario"
                    type="usuario"
                    placeholder="Eescribe tu usuario"
                    className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
                    value={usuario}
                    onChange={ e => setUsuario(e.target.value)}
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
               placeholder="Escriber tu password"
               className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
               value={password}
               onChange={ e => setPassword(e.target.value)}
            /> 
           </div>

           <input 
           type="submit"
           value="Inicia Sesion"
           className='bg-green-700 mb-5 w-full py-3 text-white uppercase font-bold rounded
           hover:cursor-pointer hover:bg-green-800 transition-color'
           />
       </form>

       <nav className='lg:flex lg:justify-between'>
           <Link
               className='block text-center my-5 text-slate-500 uppercase text-sm'
               to='/registrar'
           >¿No tienes una cuneta? Registrate </Link>

          <Link
               className='block text-center my-5 text-slate-500 uppercase text-sm'
               to='/olvidepassword'
           >¿Olvide mi Password </Link>
       </nav>

       
    </>
      
    
  )
}

export default Login


