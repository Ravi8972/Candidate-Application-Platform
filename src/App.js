import './App.css';
import HomePage from './Pages/HomePage';
import { Provider } from "react-redux";
import {store} from "./redux/app/store"

function App() {
  return (
    <Provider store={store}>
      <HomePage/>
    </Provider>
  );
}

export default App;
