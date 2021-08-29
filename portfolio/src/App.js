import './App.css';
import background from './bg.jpg'
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <Navbar />

    </div>
  );
}

export default App;
