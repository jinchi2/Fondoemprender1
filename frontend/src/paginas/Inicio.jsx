import useProyectos from "../hooks/useProyectos"
import Veremprendimiento from "./Veremprendimiento"
//pagina prinsipar

const Inicio = () => {

    const { emprendimientos } = useProyectos()
    console.log(emprendimientos)


  return (
    <>
        <h1 className='text-4xl font-black'>Bienvenidos</h1>
    
        <div className='bg-white shadow mt-10 rounded-lg-5 '>
        {emprendimientos.length ?
          emprendimientos.map(emprendimiento => (
            <Veremprendimiento
              key={emprendimiento._id}
              emprendimiento={emprendimiento}
            />
          ))
          : <p className='text-center text-red-600 uppercase p-5'>no hay emprendimientos</p>}
      </div>
      

    </>
            
          

    
  )
}

export default Inicio
