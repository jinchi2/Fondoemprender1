import React from 'react';

const InfoEmprendimiento = ({ emprendimiento }) => {
  // Verificar si emprendimiento está definido
  if (!emprendimiento) {
    return <p>No hay información disponible.</p>;
  }

  // Desestructurar propiedades de emprendimiento
  const { titulo, descripcion, direccion, beneficiario, presupuestos, imagen } = emprendimiento;

  return (
    <div className="bg-gray-200 shadow rounded-lg p-10 justify-center mt-10 mr-10">
      <div className="ml-10">
        {/* Verificar si imagen existe antes de intentar acceder a imagen.url */}
        {imagen && imagen.url && <img src={imagen.url} style={{ width: '85%', height: 'auto' }} alt={titulo} />}
      </div>

      <div className="ml-10 mt-10">
        <h1 className="uppercase font-black text-2xl text-center">{titulo}</h1>
        <p className="mt-7 mb-7">
          <span className="text-sm">{descripcion}</span>
        </p>
        <p className="text-sm">
          <strong>Dirección:</strong> {direccion}
        </p>
        <p className="text-sm">
          <strong>Beneficiario:</strong> {beneficiario}
        </p>
        <p className="text-sm">
          <strong>Presupuestos:</strong> {presupuestos}
        </p>
      </div>
    </div>
  );
};

export default InfoEmprendimiento;
