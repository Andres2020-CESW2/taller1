import './App.css';
import Header from '../src/components/Header'
import Register from './components/Register';
import List from './components/List';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <Header />
      <Row>
        <Col>
          <Register />
        </Col>
        <Col>
          <List />
        </Col>
      </Row>
    </div>
  );
}

export default App;
