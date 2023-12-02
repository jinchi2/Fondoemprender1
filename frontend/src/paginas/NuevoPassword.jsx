import { Link, useParams } from 'react-router-dom'

const NuevoPassword = () => {
  return (
    <>
      <h1 className="text-green-600 font-black text-6xl">Restablece tu password {' '}
      </h1>
    
              <form 
              className="my-10 bg-white shadow rounded-lg p-10"
              
              >
              
              <div className="my-5">
                  <label
                    className='uppercase text-gray-600 block text-xl font-bold'
                    htmlFor="nombre"
                    >Nuevo Password</label>
                    <input
                      id="password"
                      type="password"
                      placeholder="escribe tu nuevo password"
                      className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
                      
                      /> 
                  </div>
          
                  <input 
                      type="submit"
                      value="Guardar Nuevo Password"
                      className='bg-green-700 mb-5 w-full py-3 text-white uppercase font-bold rounded
                      hover:cursor-pointer hover:bg-green-800 transition-color'
                  
                  />
              </form>
    
                
                    <Link
                    className='block text-center my-5 text-slate-500 uppercase text-sm'
                    to='/'
                    >Inicia sesion </Link>

             

  </>
  )
}

export default NuevoPassword
