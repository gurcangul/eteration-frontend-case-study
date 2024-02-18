import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
            <Route path="/"  element={<Home />} />
            <Route path="/:id"  element={<ProductDetail id/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
