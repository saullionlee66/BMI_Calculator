import {Container} from 'react-bootstrap'
import Calculator from './component/Calculator'
function App() {
  return (
    <div className="App">
      <Container className="d-flex align-items-center justify-content-center"
      style={{ minHeight:"60vh"}}>
        <div className="w-100" style={{maxWidth:"500px"}}>
          <Calculator />
        </div>

      </Container>
    </div>
  );
}

export default App;
