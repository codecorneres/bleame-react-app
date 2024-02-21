// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import HomePage from './Home';
import About from './About';
import Product from './components/Product';

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/bleame-react-app" element={<HomePage />} />
          <Route path="/bleame-react-app/product" element={<Product />} />
          <Route path="/bleame-react-app/about" element={<About />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
