import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Create from './operation/Create';
import Xread from './operation/Xread';

function App() {
  return (
  <div className="container">
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Create /> }></Route>
        <Route exact path="/xread" element={ <Xread /> }></Route>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
