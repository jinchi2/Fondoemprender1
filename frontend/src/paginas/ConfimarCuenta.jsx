import { useState, useEffect } from "react"
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Alerta from "../components/Alerta"

const ConfirmarCuenta = () => {

  const [alerta, setAlerta] = useState({})

  const params = useParams()

  const { id } = params

  useEffect (() => {
    const confirmarCuenta = async () => {
        try {
          const url = `http://localhost:4000/api/usuarios/confirmar/${id}`
          const { data } = await axios(url)

          console.log(data)
          
        } catch (error) {
          setAlerta({
            msg: error.response.data.msg,
            error: true
          })
        }
    }
    confirmarCuenta()

  }, [])
  const { msg } = alerta

  return (
    <>
    <h1 className="text-green-600 font-black text-6xl">Confirma Tu cuenta {' '}
    </h1>

    <div>
      {msg && <Alerta alerta={alerta}/>}
    </div>

        
    </>
  )
}

export default ConfirmarCuenta
