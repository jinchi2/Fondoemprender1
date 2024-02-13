import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const Sidebar = () => {
    
    const { auth } = useAuth()
    console.log(auth)
  return (
    <aside className='md:w-80 lg:w96 px-5 py-10'>
        <p className='text-xl font-bold'>Hola: {auth.nombre}</p>

        <Link
            to=''
            className='bg-green-600 w-full p-3 text-white uppercase font-bold block mt-5 text-center rounded-lg'
        >Ver emprendimiento </Link>

        <Link
            to='crear-proyecto'
            className='bg-green-600 w-full p-3 text-white uppercase font-bold block mt-5 text-center rounded-lg'
        >Crear empredimiento </Link>

    </aside>
  )
}

export default Sidebar
