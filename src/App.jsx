import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Create from './operation/Create';
import Update from './operation/Update';
import Xread from './operation/Xread';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Create />}></Route>
          <Route exact path="/xread" element={<Xread />}></Route>
          <Route exact path="/update" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
