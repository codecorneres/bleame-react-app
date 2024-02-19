// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './Home';
import Product from './components/Product';

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/bleame-react-app" element={<HomePage />} />
          <Route path="/bleame-react-app/product" element={<Product />} />
        </Routes>
        <Footer />  
    </BrowserRouter>
  );
}

export default App;
