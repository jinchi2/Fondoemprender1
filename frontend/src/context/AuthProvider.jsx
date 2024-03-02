import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import clienteAxios from "../config/clienteAxios";

const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [ auth, setAuth ] = useState(false)
    const [ cargando, setCargando ] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem('token')
            if (!token) {
                setCargando(false)
                return 
            }

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            try {
                const { data } = await clienteAxios('/usuarios/perfil', config)
                setAuth(data)
                
            } catch (error) {
                setAuth(false)
            }
                setCargando(false)
            
            

        }
        autenticarUsuario()
    }, [])

    const CerrarSesion = async () => {
        try {
            localStorage.removeItem('token')
            window.location.href = '/';
        } catch (error) {
            console.log('Error al cerrar sesión:' + error)
        }
    };

    
    return(
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                cargando,
                CerrarSesion
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
export {
    AuthProvider
}

export default AuthContext