// import logo from './logo.svg';
import './App.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
// import Header from './components/Header';
import Home from './Home';
// import Product from './Product';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

// function App() {
//   return (
//     <Router>
//       <div className="Wrapped-sections">
//         <Header/>
//         <Switch>
//           <Route exact path="/"><Home/></Route>
//           <Route exact path="/product"><Product/></Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

export default App;
