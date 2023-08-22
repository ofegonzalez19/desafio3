import { Form } from "react-bootstrap";

const Buscador = ({ onChange, search }) => {
    return (
        <form className="d-flex" role="search">
      <input className="form-control my-3" type="search" placeholder="Buscar colaborador" aria-label="Search" value={search} onChange={onChange}/>
      <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      );
};
export default Buscador;