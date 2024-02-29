import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import RutaProtegida from './layouts/RutaProtegida'

import Login from './paginas/Login'
import Registrar from './paginas/Registrar'
import OlvidePassword from './paginas/OlvidePassword'
import NuevoPassword from './paginas/NuevoPassword'
import ConfimarCuenta from './paginas/ConfimarCuenta'

import Emprendimientos from './paginas/Emprendimientos'
//import Emprendimientos from './paginas/Emprendimientos'


import NuevoEmprendimiento from './paginas/NuevoEmprendimiento'
import Emprendimiento from './paginas/Emprendimiento'
import EditarEmprendimiento from './paginas/EditarEmprendimiento'

import { AuthProvider } from './context/AuthProvider'
import { EmprendimientosProvider } from './context/EmprendimientosProvider'
import Inicio from './paginas/Inicio'




function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <EmprendimientosProvider>
          <Routes>
            <Route path='/' element={<AuthLayout />}>
              <Route index element={<Inicio />} />
            </Route >
            <Route path='/' element={<AuthLayout />}>
              <Route path='login' element={<Login />} />
              <Route path='registrar' element={<Registrar />} />
              <Route path='olvidepassword' element={<OlvidePassword />} />
              <Route path='olvidepassword/:token' element={<NuevoPassword />} />
              <Route path='confirmar/:id' element={<ConfimarCuenta />} />
            </Route>
            <Route path='/emprendimientos' element={<RutaProtegida />}>
              <Route index element={<Emprendimientos />} />
              <Route path='crear-emprendimiento' element={<NuevoEmprendimiento />} />
              <Route path=':id' element={<Emprendimiento />} />
              <Route path='editar/:id' element={<EditarEmprendimiento />} />

            </Route>
          </Routes>
        </EmprendimientosProvider>
      </AuthProvider>
    </BrowserRouter>

  )
}

export default App
