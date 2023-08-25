import './App.css';
import router from "./router/router"

import { RouterProvider } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';




function App() {


  return (

    <div className="App">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}
export default App;
