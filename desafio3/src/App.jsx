import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './componentes/Formulario';
import { BaseColaboradores } from '../BaseData/BaseColaboradores';
import Listado from './componentes/Listado';
import Alerta from "./componentes/Alert";
import { useState } from "react";
import Buscador from "./componentes/Buscador";

function App() {
  const [alert, setAlerta] = useState({msg:"", color:""});
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [search, setSearch] = useState ("");

  const cambioInput = (e) => {
    setSearch(e.target.value);
  };

const filtroColaboradores = colaboradores.filter((c) => {
  if (
  c.nombre.toLowerCase().includes(search.toLowerCase())||
  c.correo.toLowerCase().includes(search.toLowerCase())||
  c.edad.toLowerCase().includes(search.toLowerCase())||
  c.cargo.toLowerCase().includes(search.toLowerCase())||
  c.telefono.toLowerCase().includes(search.toLowerCase())
  ){
    return true;
  } 
return false;
});

const cambioForm = (nuevoColaborador) => {
  const colaboradorConId = {
    ...nuevoColaborador,
    id: colaboradores.length + 1,
  };
  setColaboradores([...colaboradores, colaboradorConId]);
};

  return (
    <>
    <h1>Lista de colaborador</h1>
    <Buscador onChange={cambioInput}  search={search}/>
    <div className="divcolaborador" >
          <Listado colaboradores={filtroColaboradores}/>
          <Formulario  onSubmit={cambioForm} setAlerta={setAlerta}/>
          </div>
          {alert .msg && <Alerta msg={alert.msg} color={alert.color}/>}

</>
  );
}

export default App;    
