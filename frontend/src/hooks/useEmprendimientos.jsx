import { useContext } from "react";
import EmprendimientosContext from "../context/EmprendimientosProvider";

const useEmprendimientos = () =>{
    return useContext(EmprendimientosContext)
}

export default useEmprendimientos