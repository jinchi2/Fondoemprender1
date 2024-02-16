import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/clienteAxios";
import { useNavigate } from 'react-router-dom';


const ProyectosContext = createContext()

const ProyectosProvider = ({ children }) => {

    const [emprendimientos, setEmprendimientos] = useState([])
    const [alerta, setAlerta] = useState([])

    const [emprendimiento, setEmprendimiento] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        const obtenerEmprendimientos = async () => {
            try {
                const token = localStorage.getItem('token')
                if (!token) return

                const config = {
                    headers: {
                        "content-type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
                const { data } = await clienteAxios.get('/emprendimiento', config)
                setEmprendimientos(data)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerEmprendimientos()
    }, [])

    const mostrarAlerta = alerta => {
        setAlerta(alerta)

        setTimeout(() => {
            setAlerta({})
        }, 5000)
    }

    const submitProyecto = async Emprendimiento => {
        /* if (proyecto.id) {
             await editarProyecto(proyecto)
         }else {
             await NuevoProyecto(proyecto)
         }
         return*/
        try {
            const token = localStorage.getItem('token')
            if (!token) return

            const config = {
                headers: {
                    "content-type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            const { data } = await clienteAxios.post('/emprendimiento', Emprendimiento, config)
            console.log(data)

            setEmprendimientos([...emprendimientos, data])

            setAlerta({
                msg: 'emprendimiento creado correctamente',
                error: false
            })

            setTimeout(() => {
                setAlerta({})
                navigate('/proyectos')
                window.location.reload();

            }, 3000)
        } catch (error) {
            console.log(error)
        }
    }

    // const editarEmprendimiento = async Emprendimiento => {

    // }
    const obtenerEmprendimiento = async id =>{
        try {
            const token = localStorage.getItem('token')
            if (!token) return

            const config = {
                headers: {
                    "content-type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            const { data } = await clienteAxios(`/emprendimiento/${id}`, config)
            setEmprendimiento(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ProyectosContext.Provider
            value={{
                emprendimientos,
                mostrarAlerta,
                alerta,
                submitProyecto,
                obtenerEmprendimiento
            }}
        >{children}
        </ProyectosContext.Provider>
    )
}
export {
    ProyectosProvider 
}

export default ProyectosContext