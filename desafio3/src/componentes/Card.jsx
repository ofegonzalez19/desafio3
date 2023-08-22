import Card from '../react-bootstrap/Card';
import ListGroup from '../react-bootstrap/ListGroup';
import Formulario from './Formulario'

function ListGroupWithHeaderExample(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Header>Featured</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>{props.cambioInput} </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default ListGroupWithHeaderExample;