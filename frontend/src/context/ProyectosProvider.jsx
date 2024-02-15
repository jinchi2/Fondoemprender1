import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/clienteAxios";
import { useNavigate } from 'react-router-dom';

const ProyectosContext = createContext()

const ProyectosProvider = ({ children }) => {

    const [proyectos, setProyectos] = useState([])
    const [alerta, setAlerta] = useState([])
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
                setProyectos(data)
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

            setAlerta({
                msg: 'emprendimiento creado correctamente',
                error: false
            })

            setTimeout(() => {
                setAlerta({})
                navigate('/proyectos')

            }, 3000)
        } catch (error) {
            console.log(error)
        }
    }

    // const editarEmprendimiento = async Emprendimiento => {

    // }

    return (
        <ProyectosContext.Provider
            value={{
                proyectos,
                mostrarAlerta,
                alerta,
                submitProyecto
            }}
        >{children}
        </ProyectosContext.Provider>
    )
}
export {
    ProyectosProvider
}

export default ProyectosContext