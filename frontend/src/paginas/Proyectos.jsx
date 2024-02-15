import useProyectos from "../hooks/useProyectos"
import PreviewEmprendimiento from "../components/PreviewEmprendimiento"

const Proyectos = () => {

  const { proyectos } = useProyectos()
  console.log(proyectos)
  return (
    <>
      <h1 className='text-4xl font-black'>Emprendimientos</h1>

      <div className='bg-white shadow mt-10 rounded-lg-5'>
        {proyectos.length ?
          proyectos.map(proyecto => (
            <PreviewEmprendimiento
              key={proyectos._id}
              proyecto={proyecto}
            />
          ))
          : <p className='text-center text-red-600 uppercase p-5'>no hay emprendimientos</p>}
      </div>
    </>
  )
}

export default Proyectos
