import { BrowserRouter, Routes, Route} from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import Login from './paginas/Login'
import Registrar from './paginas/Registrar'
import OlvidePassword from './paginas/OlvidePassword'
import NuevoPassword from './paginas/NuevoPassword'
import ConfimarCuenta from './paginas/ConfimarCuenta'


function App() {
  
  return (  
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path='registrar' element={<Registrar />} />
          <Route path='olvidepassword' element={<OlvidePassword />} />
          <Route path='olvidepassword/:token' element={<NuevoPassword />} />
          <Route path='confirmar/:id' element={<ConfimarCuenta />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  )
}  
  
export default App
