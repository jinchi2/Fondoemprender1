import useEmprendimientos from "../hooks/useEmprendimientos"
//pagina prinsipar

const Inicio = () => {

  const { emprendimientos } = useEmprendimientos()
  console.log(emprendimientos)

  return (
    <>
      <h1 className='text-4xl font-black'>Bienvenidos</h1>

      <div className='bg-white shadow mt-10 rounded-lg'>
        {emprendimientos.length ? <p>si puedes ver</p> : <p className='mt-5 text-center text-gray-600 uppercase'>No puedes ver</p>}
      </div>

    </>
  )
}

export default Inicio
