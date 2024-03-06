import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import useEmprendimientos from '../hooks/useEmprendimientos';

const Emprendimiento = () => {
  const params = useParams();
  const { obtenerEmprendimiento, emprendimiento, cargando } = useEmprendimientos();

  useEffect(() => {
    obtenerEmprendimiento(params.id);
  }, [params]);

  const {
    titulo,
    telefono,
    descripcion,
    direccion,
    imagen,
    beneficiario,
    presupuestos,
    // Agrega aquí otros campos que desees mostrar
  } = emprendimiento;

  if (cargando) return 'Cargando....';

  return (
    <div className='max-w-2xl mx-auto mt-8  '>
      <div className='bg-white rounded-lg shadow-md p-8'>
        <h1 className='font-black text-4xl mb-4'>{titulo}</h1>

        {imagen && (
          <div className='mb-4'>
            <img src={imagen.url} alt={titulo} className='w-32 h-auto rounded-md' />
          </div>
        )}

        <p className='text mb-2'>Telefono: {telefono}</p>
        <p className='text mb-2'>Dirección: {direccion}</p>
        <p className='text-lg mb-2'>Descripcion: {descripcion}</p>
        <p className='text-lg mb-2'>Beneficiario: {beneficiario}</p>
        <p className='text-lg mb-2'>Presupuestos: {presupuestos}</p>
        {/* Agrega aquí otros campos que desees mostrar */}
        
        
        
        <div className='flex justify-between items-center mt-4'>
          <Link
            to={`/emprendimientos/editar/${params.id}`}
            className='uppercase font-bold'>
            Editar
          </Link>
          {/* Otros elementos o acciones que desees agregar */}
        </div>
      </div>
    </div>
  );
};

export default Emprendimiento;
