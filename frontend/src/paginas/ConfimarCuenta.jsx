import { useParams, Link} from 'react-router-dom'

const ConfimarCuenta = () => {
  return (
    <>
    <h1 className="text-green-600 font-black text-6xl">Confirma Tu cuenta {' '}
    </h1>
    
    <div>ConfimarCuenta</div>
    <div className='mt-20 md:mt-10 shadow-lg px-5 py-10 rounded-xl bg-white'>
      

      
         <Link
            className='block text-center my-5 text-slate-500 uppercase text-sm'
            to='/'
         >Inicia sesion </Link>

     
    </div>
    </>
  )
}

export default ConfimarCuenta
