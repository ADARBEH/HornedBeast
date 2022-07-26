import './App.css';
import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";
import { Button } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <>
      <Header />
      <Main />
      <Footer />
      </>
    </div>
  );
};

export default App;