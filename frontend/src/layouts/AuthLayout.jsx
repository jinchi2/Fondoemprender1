import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import HeaderLogin from "../components/HeaderLogin"

const AuthLayout = () => {
  return (
    <>
        <HeaderLogin />
        <main className="container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center">
               <Outlet />
        </main>
    </>
  )
}

export default AuthLayout
