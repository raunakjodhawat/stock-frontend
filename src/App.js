import './App.css';
import SearchBox from './components/SearchBox';
import ResponsiveAppBar from './components/VerticalAppBar';

function App() {
  return (
    <div className="App">
      <center>
        <SearchBox />
        <br />
        <ResponsiveAppBar />
      </center>
    </div>
  );
}

export default App;
