import Main from "./components/Main";
import './App.css';
import { ThemeProvider } from "./components/ThemeContext";


function App() {
  return (
    <div className="App">

        <ThemeProvider>
          <Main />
        </ThemeProvider>

    </div>
    
  );
}


export default App;
