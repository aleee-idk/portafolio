import './App.css';
import MainBar from './components/navbar.js';
import MainPage from './pages/main.js';

function App() {
  return (
    <div className="App">
      <header>
        <MainBar />
      </header>
      <main>
        <MainPage id="main_page" />
      </main>
    </div>
  );
}

export default App;
