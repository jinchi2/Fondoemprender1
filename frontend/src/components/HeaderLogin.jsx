import { Link } from "react-router-dom"

const HeaderLogin = () => {
  return (
    <header className='px-4 py-5 bg-white border-b'>
        <div className='md:flex md:justify-between'>
            <h2 className='text-4xl text-green-600 font-black-center'>
                Fondo emprender
            </h2>
            <div className='flex items-center gap-4'>
            <a
                    className='text-white text-sm bg-green-600 p-3 rounded-md uppercase font.bold'
                    href="/"
                >Inicio</a>

                <a
                    className='text-white text-sm bg-green-600 p-3 rounded-md uppercase font.bold'
                    href="/login"
                >Iniciar Sesion</a>

                

                
            </div>
        </div>
    </header>
  )
}

export default HeaderLogin
