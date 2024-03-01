import useEmprendimientos from "../hooks/useEmprendimientos"
import Veremprendimiento from "../components/Veremprendimiento"
//pagina prinsipar

const Inicio = () => {

  const { emprendimientos } = useEmprendimientos()
  //console.log(emprendimientos)

  return (
    <>
      <h1 className='text-4xl font-black'>Bienvenidos</h1>

      <div className='bg-white shadow mt-10 rounded-lg'>
        {emprendimientos.length ? 
          emprendimientos.map(emprendimiento => (
            <Veremprendimiento
              key={emprendimientos._id}
              emprendimiento={emprendimiento}
            />

          ))
        : <p className='mt-5 text-center text-gray-600 uppercase'>No puedes ver</p>}
      </div>

    </>
  )
}

export default Inicio
