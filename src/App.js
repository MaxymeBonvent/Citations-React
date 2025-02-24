import './App.css';

// Composants
import Header from './composants/Header';
import Footer from './composants/Footer';
import Main from './composants/Main';

function App() {
  return (
    <div>
      <Header/>
        <Main/>
      <Footer/>
    </div>
  );
}

export default App;