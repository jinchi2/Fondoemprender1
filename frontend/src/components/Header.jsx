import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const Header = () => {
    const { CerrarSesion } = useAuth();
   const handleCerrarSesion = () => {
        CerrarSesion()
   } 
  return (
    <header className='px-4 py-5 bg-white border-b'>
        <div className='md:flex md:justify-between'>
            <h2 className='text-4xl text-green-600 font-black-center'>
                Fondo emprende
            </h2>
        
            <input
                type='search'
                placeholder='Buscar Emprendimientos'
                className='rounded-lg lg:w-96 block p-2 boder' />
            <div className='flex items-center gap-4'>
                <Link
                    to='/proyectos'
                    className='font-bold uppercase'>
                    Empredimiendo
                </Link>

                <button
                    type='button'
                    className='text-white text-sm bg-green-600 p-3 rounded-md uppercase font.bold'
                    onClick={handleCerrarSesion}
                >Cerrar Sesion</button>

            </div>

        </div>
    </header>
  )
}

export default Header
