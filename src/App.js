// import logo from './logo.svg';
// import './App.css';
import ToDo from './components/todoApp/ToDo';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (<>
    <Routes>
      <Route path="/" element={<ToDo />} />
    </Routes>
  </>)
}

export default App;
