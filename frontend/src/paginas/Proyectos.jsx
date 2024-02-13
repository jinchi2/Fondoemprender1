import useProyectos from "../hooks/useProyectos"
import PreviewProyecto from "../components/PreviewProyecto"

const Proyectos = () => {

    const { proyectos } = useProyectos()
    console.log(proyectos)
    
  return (
    <>
        <h1 className='text-4xl font-black'>Proyectos</h1>

        <div className='bg-white shadow mt-10 rounded-lg-5'>
            {proyectos.length ? 
            proyectos.map(proyecto =>(
                <PreviewProyecto 
                  key={proyectos._id}
                  proyecto={proyecto}
                
                />
              ))
            : <p className='text-center text-red-600 uppercase'>no hay proyectos</p>}
        </div>
    </>
  )
}

export default Proyectos
