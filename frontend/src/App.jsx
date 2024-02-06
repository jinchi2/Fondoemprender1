import { BrowserRouter, Routes, Route} from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import RutaProtegida from './layouts/RutaProtegida'

import Login from './paginas/Login'
import Registrar from './paginas/Registrar'
import OlvidePassword from './paginas/OlvidePassword'
import NuevoPassword from './paginas/NuevoPassword'
import ConfimarCuenta from './paginas/ConfimarCuenta'
import Proyectos from './paginas/Proyectos'
import NuevoProyecto from './paginas/NuevoProyecto'

import { AuthProvider } from './context/AuthProvider'
import { ProyectosProvider } from './context/ProyectosProvider'


function App() {
  
  return (  
    <BrowserRouter>
      <AuthProvider>
        <ProyectosProvider>
          <Routes>
            <Route path='/' element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path='registrar' element={<Registrar />} />
              <Route path='olvidepassword' element={<OlvidePassword />} />
              <Route path='olvidepassword/:token' element={<NuevoPassword />} />
              <Route path='confirmar/:id' element={<ConfimarCuenta />} />
            </Route>
            <Route path='/proyectos' element={<RutaProtegida />}>
                <Route index element={<Proyectos />}/>
                <Route path='crear-proyecto' element={<NuevoProyecto />}></Route>

            </Route>
          </Routes>
        </ProyectosProvider>
      </AuthProvider>
    </BrowserRouter>
    
  )
}  
  
export default App
