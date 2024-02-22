import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/clienteAxios";
import { useNavigate } from 'react-router-dom';


const ProyectosContext = createContext()

const ProyectosProvider = ({ children }) => {

    const [emprendimientos, setEmprendimientos] = useState([])
    const [alerta, setAlerta] = useState([])
    const [emprendimiento, setEmprendimiento] = useState({})
    const [cargando, setCargando] = useState(false)

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

    const submitEmprendimiento = async emprendimiento => {
        
        if (emprendimiento.id) {
             await editarEmprendimiento(emprendimiento)
         }else {
             await nuevoEmprendimiento(emprendimiento)
         }
         return
        
    }

    const editarEmprendimiento = async emprendimiento => {
        try {
            const token = localStorage.getItem('token')
            if (!token) return
            const form = new FormData
            for (let key in emprendimiento){
                form.append(key, emprendimiento[key])
            }
            const config = {
                headers: {
                    "Content-type": "multipart/form-data",
                    Authorization: `Bearer ${token}`
                }
            }
            const { data } = await clienteAxios.put(`/emprendimiento/${emprendimiento.id}`,emprendimiento, config)
            
            //Sincronizar el state
            const emprendimientoActualizados = emprendimientos.map(emprendimientoState => emprendimientoState._id === data._id ? data : emprendimientoState)
            console.log(emprendimientoActualizados)
            //Mostrar la alerta emprendimiento actualizado

            //Redireccionar


            setTimeout(() => {
                setAlerta({})
                navigate('/proyectos')
                //recargar
                window.location.reload();
            }, 3000)
        } catch (error) {
            console.log(error)
        }
     }

     const nuevoEmprendimiento = async emprendimiento => {
        try {
            const token = localStorage.getItem('token')
            if (!token) return
            const form = new FormData
            for (let key in emprendimiento){
                form.append(key, emprendimiento[key])
            }
            const config = {
                headers: {
                    "Content-type": "multipart/form-data",
                    Authorization: `Bearer ${token}`
                }
            }
            const { data } = await clienteAxios.post('/emprendimiento', emprendimiento, config, {
                headers: {
                    "Content-type": "multipart/form-data"
                }
            })
            setEmprendimientos([...emprendimientos, data])

            setAlerta({
                msg: 'emprendimiento creado correctamente',
                error: false
            })

            setTimeout(() => {
                setAlerta({})
                navigate('/proyectos')
                //recargar
                window.location.reload();

            }, 3000)
        } catch (error) {
            console.log(error)
        }
     }


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
        }finally{
            setCargando(false)
        }
    }

    return (
        <ProyectosContext.Provider
            value={{
                emprendimientos,
                mostrarAlerta,
                alerta,
                submitEmprendimiento,
                obtenerEmprendimiento,
                emprendimiento,
                cargando
            }}
        >{children}
        </ProyectosContext.Provider>
    )
}
export {
    ProyectosProvider 
}

export default ProyectosContext