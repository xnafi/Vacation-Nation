import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Route';

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
