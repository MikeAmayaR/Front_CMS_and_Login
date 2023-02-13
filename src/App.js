import './App.css';
import { MyRoutes } from './routes/routes';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
          <BrowserRouter>
              <MyRoutes />
          </BrowserRouter>
    </div>
  );
}

export default App;
