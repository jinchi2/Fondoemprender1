import { useState, useEffect } from "react"
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Alerta from "../components/Alerta"

const ConfirmarCuenta = () => {

  const [alerta, setAlerta] = useState({})

  const [cuentaConfirmada, setCuentaConfirmada] = useState(false)

  const params = useParams()

  const { id } = params

  const { msg } = alerta
  
  useEffect (() => {
    const confirmarCuenta = async () => {
        try {
          //TODO: Mover hacia un cliente Axios
          const url = `http://localhost:4000/api/usuarios/confirmar/${id}`
          const { data } = await axios(url)

          setAlerta({
            msg: data.msg,
            error: false
          })
          setCuentaConfirmada(true)
          
        } catch (error) {
          setAlerta({
            msg: error.response.data.msg,
            error: true
          })
        }
    }
    confirmarCuenta()
  }, [])

  return (
    <>
    <h1 className="text-green-600 font-black text-6xl">Confirma Tu cuenta {' '}
    </h1>

    <div className='mt-20 md:mt-10 shadow-lg px-5 py-10 rounded-xl bg-white'>
      {msg && <Alerta alerta={alerta}/>}

      {cuentaConfirmada && (
          <Link
            className='block text-center my-5 text-slate-500 uppercase text-sm'
            to='/'
          >Inicia sesion </Link>
      )}
    </div>

        
    </>
  )
}

export default ConfirmarCuenta
