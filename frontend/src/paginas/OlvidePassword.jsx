import { Link } from "react-router-dom"

const OlvidePassword = () => {
  return (
    <>
    <h1 className="text-green-600 font-black text-6xl">Recupera tu Cuenta {' '}
    </h1>

    
    
    <form 

         className="my-10 bg-white shadow rounded-lg p-10"
         
         >

        <div className="my-5">
         <label
          className='uppercase text-gray-600 block text-xl font-bold'
          htmlFor="usuario"
          >Email</label>
        <input
            id="email"
            type="text"
            placeholder="Email de Registro"
            className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
            
         /> 
        </div>

        <input 
        type="submit"
        value="Enviar Instrucciones"
        className='bg-green-700 mb-5 w-full py-3 text-white uppercase font-bold rounded
        hover:cursor-pointer hover:bg-green-800 transition-color'
        />
    </form>

    <nav className='lg:flex lg:justify-between'>
        <Link
            className='block text-center my-5 text-slate-500 uppercase text-sm'
            to='/'
        >¿Ya tienes cuenta? Inicia sesion </Link>

        <Link
               className='block text-center my-5 text-slate-500 uppercase text-sm'
               to='/registrar'
        >¿No tienes una cuneta? Registrate </Link>
    </nav>

 </>
    
  )
}

export default OlvidePassword
