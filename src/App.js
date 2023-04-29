// import logo from './logo.svg';
// import './App.css';
import ToDo from './components/todoApp/ToDo';
import Login from './components/todoApp/login/login';
import SignUp from './components/todoApp/signup/signup';
import { Routes, Route } from 'react-router-dom';
import PublicRoutes from "./routes/publicRoutes";
import ProtectedRoutes from "./routes/protectedRoutes";

function App() {
  return (<>
    <Routes>
      <Route path="/login" element={
        <PublicRoutes>
          <Login />
        </PublicRoutes>
      } />
      <Route path="/signup" element={
        <PublicRoutes>
          <SignUp />
        </PublicRoutes>
      } />

      <Route path="/" element={
        <ProtectedRoutes>
          <ToDo />
        </ProtectedRoutes>
      } />
    </Routes>
  </>)
}

export default App;
